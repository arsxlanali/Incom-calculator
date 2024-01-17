"use client";
import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
// import { months } from "./data";
// import { getRecentYears } from "@/app/utils";

interface Props {
    years: Options;
    months: Options;
}

export default function DateSelector({years, months}:Props) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete label="Select an Year" className="max-w-xs pb-3">
        {years.map((year) => (
          <AutocompleteItem key={year.value} value={year.value}>
            {year.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        label="Select Month"
        className="max-w-xs"
        defaultItems={months}
        disabledKeys={[ "1","2"]}
        >
        {(item) => <AutocompleteItem key={item?.value}>{item?.label}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
}
