"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useField } from "formik";
import React from "react";

// Define types for AutocompleteProps
interface AutocompleteProps {
  label: string;
  items: Options;
  disabledKeys?: string[];
  field: string;
}

const CustomAutocomplete: React.FC<AutocompleteProps> = ({
  label,
  items,
  disabledKeys,
  field,
}) => {
  const [fieldProps, meta, helper] = useField(field);

  return (
    <Autocomplete
      size="sm"
      label={label}
      className="max-w-xs pb-3"
      defaultItems={items}
      disabledKeys={disabledKeys}
      errorMessage={meta.touched && meta.error}
      isInvalid={Boolean(meta.touched && meta.error)}
      selectedKey={fieldProps.value}
      onSelectionChange={(selectedKey) =>
        helper.setValue(selectedKey?.toString())
      }
      onClose={() => helper.setTouched(true)}
    >
      {(item) => (
        <AutocompleteItem key={item?.value}>{item?.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default CustomAutocomplete;
