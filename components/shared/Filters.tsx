import { FC } from "react";
import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";

interface FiltersProps {
  className?: string;
}
export const Filters: FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title size="sm" text="Фильтрация" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собрать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Ингридиенты"
        limit={6}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
