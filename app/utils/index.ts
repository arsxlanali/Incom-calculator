import * as Yup from "yup";

export const getRecentYears = (): Options => {
  const currentYear = new Date().getFullYear();
  const recentYears = [];

  for (let i = 0; i < 4; i++) {
    const year = currentYear - i;
    recentYears.push({
      label: year.toString(),
      value: year,
      description: `A year in the 21st century, ${
        i === 0 ? "current year" : ""
      }`,
    });
  }

  return recentYears;
};

export const generateYupValidationSchema = (count: number): [YupValidationSchema, InitialState] => {
  const validationSchema: YupValidationSchema = {};
  const initialState: any = {}

  for (let i = 0; i < count; i++) {

    validationSchema[`toYear${i}`] = Yup.string().required(
      "Please select a valid year"
    );
    validationSchema[`toMonth${i}`] = Yup.string().required(
      "Please select a valid month"
    );
    validationSchema[`fromYear${i}`] = Yup.string().required(
      "Please select a valid year"
    );
    validationSchema[`fromMonth${i}`] = Yup.string().required(
      "Please select a valid month"
    );

    initialState[`toYear${i}`] = "";
    initialState[`toMonth${i}`] = ""
    initialState[`fromYear${i}`] = "";
    initialState[`fromMonth${i}`] = "";
  }

  return [Yup.object().shape(validationSchema), initialState];
};

export const months: Options = [
  { label: "January", value: 1, description: "The first month of the year" },
  { label: "February", value: 2, description: "The second month of the year" },
  { label: "March", value: 3, description: "The third month of the year" },
  { label: "April", value: 4, description: "The fourth month of the year" },
  { label: "May", value: 5, description: "The fifth month of the year" },
  { label: "June", value: 6, description: "The sixth month of the year" },
  { label: "July", value: 7, description: "The seventh month of the year" },
  { label: "August", value: 8, description: "The eighth month of the year" },
  { label: "September", value: 9, description: "The ninth month of the year" },
  { label: "October", value: 10, description: "The tenth month of the year" },
  {
    label: "November",
    value: 11,
    description: "The eleventh month of the year",
  },
  {
    label: "December",
    value: 12,
    description: "The twelfth month of the year",
  },
];
