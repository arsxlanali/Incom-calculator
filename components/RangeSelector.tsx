import { useFormikContext } from "formik";
import DateSelector from "./DateSelector";
import { CancelIcon } from "./icons";
import { memo, useState } from "react";
import { setOptions, useDispatch, useSelector } from "@/lib/redux";
import { validateDateRanges } from "@/app/utils";

interface Props {
  index: number;
  length: number;
  setCountArray: any;
}

const RangeSelector: React.FC<Props> = memo(
  ({ index, length, setCountArray }: Props) => {
    const formik = useFormikContext<SelectedOptions>();
    // const [slected, setSelected] = useState()
    const dispatch = useDispatch();
    const {
      [`fromMonth${index}`]: _fromMonth,
      [`fromYear${index}`]: _fromYear,
      [`toMonth${index}`]: _toMonth,
      [`toYear${index}`]: _toYear,
      ...rest
    } = formik.values;
    
 
    return (
      <div className="flex flex-col items-end">
        {length === index && index !== 0 && (
          <CancelIcon
            className="pb-1"
            onClick={() => {

              dispatch(setOptions(rest));
              setCountArray((prevCountArray: []) => [
                ...Array(prevCountArray.length - 1).keys(),
              ]);
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
      </div>
    );
  }
);

export default RangeSelector;
