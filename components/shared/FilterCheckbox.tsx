import { FC } from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}
export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  checked,
  value,
  text,
  onCheckedChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
    </div>
  );
};
