"use client";
import { useSelector } from "@/lib/redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomAutocomplete from "./CustomAutoComplete";

interface Props {
  fieldMonth: string;
  fieldYear: string;
  index: number;
}

export default function DateSelector({fieldMonth, fieldYear, index}: Props) {
  const { years, months } = useSelector((state) => state.income);

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <CustomAutocomplete label="Select a Year" items={years} field={fieldYear} index={index}/>
      <CustomAutocomplete label="Select a Month" items={months} field={fieldMonth} index={index}/>
    </div>
  );
}
