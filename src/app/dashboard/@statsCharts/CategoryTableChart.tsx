"use client";
import MenuButton from "@/components/common/Menus/MenuButton";
import ChartTitle from "@/components/labels/ChartTitle";
import { FC } from "react";
import CategoryTable from "../_components/category-table/CategoryTable";

interface ICategoryTableChartProps {}

const CategoryTableChart: FC<ICategoryTableChartProps> = (props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <ChartTitle title="Product Sales Category" />
        <div>
          <MenuButton onChange={(value) => console.log(value)} />
        </div>
      </div>
      <div className="mt-6">
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoryTableChart;
