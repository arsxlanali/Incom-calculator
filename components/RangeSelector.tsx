import { useField, useFormikContext } from "formik";
import DateSelector from "./DateSelector";
import { CancelIcon } from "./icons";
import { memo, useState } from "react";
import { setOptions, updatePrice, useDispatch, useSelector } from "@/lib/redux";
import { validateDateRanges } from "@/app/utils";
import { useTheme } from "next-themes";
import { Input } from "@nextui-org/input";

interface Props {
  index: number;
  length: number;
  setCountArray: any;
}

const RangeSelector: React.FC<Props> = memo(
  ({ index, length, setCountArray }: Props) => {
    const formik = useFormikContext<SelectedOptions>();
    const [fieldProps, meta, helper] = useField(`pay${index}`);
    const { resolvedTheme: theme } = useTheme();
    console.log("Theme", theme);

    const {selectedOptions} = useSelector((state=> state.income))
    const dispatch = useDispatch();
    const {
      [`fromMonth${index}`]: _fromMonth,
      [`fromYear${index}`]: _fromYear,
      [`toMonth${index}`]: _toMonth,
      [`toYear${index}`]: _toYear,
      [`pay${index}`]: _pay,
      ...rest
    } = selectedOptions;
    return (
      <div
        className={`flex flex-col items-end bg-slate-300 p-4 mt-4 rounded-lg ${
          theme !== "dark" && theme !== undefined
            ? "bg-opacity-100"
            : "bg-opacity-10"
        }`}
      >
        {length === index && index !== 0 && (
          <CancelIcon
            className="pb-1"
            onClick={() => {
              dispatch(setOptions(rest));
              setCountArray((prevCountArray: []) => prevCountArray.slice(0, -1));
            }}
          />
        )}
        <DateSelector
          fieldMonth={`fromMonth${index}`}
          fieldYear={`fromYear${index}`}
          index={index}
        />
        <DateSelector
          fieldMonth={`toMonth${index}`}
          fieldYear={`toYear${index}`}
          index={index}
        />
        <Input
          type="number"
          // label="Price"
          isInvalid={Boolean(meta.touched && meta.error)}
          value={fieldProps.value}
          size="sm"
          min="1"
          placeholder="0.00"
          onChange={(e) => {
            helper.setValue(e.target.value?.toString());

            dispatch(updatePrice({ index, value: e.target.value }));

            fieldProps.onChange(e);
          }}
          // labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">Rs</span>
            </div>
          }
        />
      </div>
    );
  }
);

export default RangeSelector;
