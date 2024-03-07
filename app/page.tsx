"use client";
import RangeSelector from "@/components/RangeSelector";
import { AddIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useId } from "react";
import { generateYupValidationSchema, validateDateRanges } from "./utils";
import { setDisableKeys, useDispatch, useSelector } from "@/lib/redux";
import SliderComponent from "@/components/Slider";
import ResultTable from "@/components/ResultTable";

export default function Home() {
  const dispatch = useDispatch();
  const [countArray, setCountArray] = useState([0]);
  const { selectedOptions: values } = useSelector((state) => state.income);
  const [validationSchema, initialValues] = generateYupValidationSchema(
    countArray.length,
    values
  );
  return (
    <section className="flex justify-center flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col justify-center gap-4 py-8 md:py-10 w-96">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title({ color: "violet" })}>
              Income Calculator&nbsp;
            </h1>
            <br />
          </div>
          <div>
            {countArray.map((item, index) => (
              <RangeSelector
                key={item}
                index={index}
                length={countArray.length - 1}
                setCountArray={setCountArray}
              />
            ))}
          </div>
          <div className="flex">
            <SliderComponent />
          </div>

          <div className="flex gap-3 justify-center">
            <Button
              type="submit"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Calculate
            </Button>
            <Button
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
              })}
              onClick={() => {
                setCountArray((prevCountArray) => [
                  ...prevCountArray,
                  prevCountArray.length,
                ]);
                const valid = validateDateRanges(values, countArray.length);
                dispatch(setDisableKeys(valid));
              }}
            >
              Add Range
              <AddIcon size={20} />
            </Button>
          </div>
        </Form>
      </Formik>
      <div>
      <ResultTable/>
      </div>
    </section>
  );
}
