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


type CounterSliceState = {
  value: number;
  status: "idle" | "loading" | "failed";
  years: Options;
  months: Options;
  // isFieldSelected: boolean;
  selectedOptions: SelectedOptions;
  disabledKeys: DisableFields;
}

type SetDisableAction = {
  [key: string]: string[];
}

type DisableFields = {
  // disablefromMonth: string[];
  // disablefromYear: string [];
  // disabletoMonth: string [];
  // disabletoYear: string[];
  [key: string]: string[]; // Add a string index signature
};

type SelectedOptions = {
  [key: string]: Key;
}