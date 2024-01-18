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
import { generateYupValidationSchema } from "./utils";

export default function Home() {
  const [countArray, setCountArray] = useState([0]);
  const [validationSchema, initialValues] = generateYupValidationSchema(
    countArray.length + 1
  );
  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Make&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
            <br />
            {/* <h1 className={title()}>
          websites regardles of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2> */}
          </div>

          <div>
            {countArray.map((item) => (
              <RangeSelector
                key={item}
                number={item}
                setCountArray={setCountArray}
              />
            ))}
          </div>

          <div className="flex gap-3">
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
				setCountArray((prevCountArray) => [...prevCountArray, prevCountArray.length + 1]);
			  }}
            >
              Add Range
              <AddIcon size={20} />
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
