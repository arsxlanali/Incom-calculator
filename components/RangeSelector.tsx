import DateSelector from "./DateSelector";
import { CancelIcon } from "./icons";
import { memo } from "react";

interface Props {
  number: number;
  setCountArray: any;
}

const RangeSelector: React.FC<Props> = memo(({ number, setCountArray }: Props) => {
  return (
    <div className="flex flex-col items-end">
      <CancelIcon
        className="pb-1"
        onClick={() =>
          setCountArray((prevCountArray: []) => {
            const newArray = [...prevCountArray];
            newArray.splice(number, 1);
            return newArray;
          })
        }
      />
      <DateSelector
        fieldMonth={`toMonth${number}`}
        fieldYear={`toYear${number}`}
      />
      <DateSelector
        fieldMonth={`fromMonth${number}`}
        fieldYear={`fromYear${number}`}
      />
    </div>
  );
});

export default RangeSelector;
