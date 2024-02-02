import { validateDateRanges } from "@/app/utils";
import { setDisableKeys, setOptions, useDispatch, useSelector } from "@/lib/redux";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useField, useFormikContext } from "formik";
import React, { useState } from "react";

// Define types for AutocompleteProps
interface AutocompleteProps {
  label: string;
  items: Options;
  // disabledKeys?: string[];
  field: string;
  index: number;
}

const CustomAutocomplete: React.FC<AutocompleteProps> = ({
  label,
  items,
  // disabledKeys,
  field,
  index
}) => {
  const [fieldProps, meta, helper] = useField(field);
  // const [disabledKeys, setDisabledKeys] = useState<string[]>([])
  const { disabledKeys: disalbed } = useSelector(state=> state.income)

  const dispatch = useDispatch()
  const formik = useFormikContext<SelectedOptions>(); // Access the Formik context

  // console.log("JKJK", `d${field}`,disalbed[`d${field}`]);
  

  return (
    <Autocomplete
      size="sm"
      label={label}
      className="max-w-xs pb-3"
      defaultItems={items}
      // isDisabled={ field.slice(0,2) === "to" ? isFieldSelected : false}
      isClearable={false}
      disabledKeys={disalbed[`d${field}`]}
      errorMessage={meta.touched && meta.error}
      isInvalid={Boolean(meta.touched && meta.error)}
      selectedKey={fieldProps.value}
      onSelectionChange={(selectedKey) => {
        helper.setValue(selectedKey?.toString());
        const selectedValues = {...formik.values, [field]: selectedKey}
        const disableKeys = {...validateDateRanges(selectedValues, index)}
        console.log("HI", disableKeys);
        
        dispatch(setOptions(selectedValues))
        dispatch(setDisableKeys(disableKeys))
        // if(field.slice(0, 4) === "from" && selectedValues[`fromMonth${index}`] !== "" && selectedValues[`fromYear${index}`] !== "") {
        //   dispatch(setSelected(false))
        // }

      }}
      onClose={() => helper.setTouched(true)}
    >
      {(item) => (
        <AutocompleteItem key={item?.value}>{item?.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default CustomAutocomplete;
