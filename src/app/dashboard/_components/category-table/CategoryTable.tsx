"use client";
import { FC } from "react";
import CategorySection from "./CategorySection";
import { categoryData } from "@/config/constants/DashboardData";

interface ICategoryTableProps {}

const CategoryTable: FC<ICategoryTableProps> = (props) => {
  return (
    <div className="flex">
      <div className="h-[300px] w-0.5 bg-[var(--foreground)] opacity-10" />

      <div className="flex w-full">
        {categoryData.map((v, index) => (
          <div key={index} className="flex items-start">
            <div className="pr-10 pl-4 mt-5">
              <CategorySection data={v} />
            </div>
            <div className="h-[300px] w-0.5 bg-[var(--foreground)] opacity-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTable;
