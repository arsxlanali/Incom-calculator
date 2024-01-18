type Options = {
  label: string;
  value: number;
  description: string;
}[];

type YupValidationSchema = {
  [key: string]: Yup.StringSchema<string | undefined>;
};

type InitialState = {
  [key: string]: string;
}


