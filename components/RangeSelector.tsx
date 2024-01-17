import DateSelector from "./DateSelector";
import { getRecentYears } from "@/app/utils";
import { months } from "./data";

interface Props {
  years: Options;
  months: Options;
}
export default function RangeSelector({years, months}: Props) {
  return (
    <>
      <DateSelector months={months} years={years} />
      <DateSelector months={months} years={years} />
    </>
  );
}
