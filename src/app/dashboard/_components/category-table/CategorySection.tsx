import { FC } from "react";
import { PiDressBold } from "react-icons/pi";

interface ICategorySectionProps {
  data: {
    name: string;
    percentage: string;
    icon: any;
  };
}

const CategorySection: FC<ICategorySectionProps> = ({ data }) => {
  return (
    <div>
      <div className="text-[var(--foreground)] opacity-50">
        <data.icon style={{ fontSize: "22px" }} />
      </div>
      <div className="font-sans text-[var(--foreground)]">
        <p className="text-lg font-[700] my-0.5">{data.percentage}</p>
        <p className="text-md opacity-50 font-[400] w-15">{data.name}</p>
      </div>

      {data.name === "Accessories" ? (
        <div className="bg-[var(--purple-light-100)] opacity-50 ml-[-17px] mr-[-40px] h-10">
          <div className="mt-18 pt-2 pl-4  text-[var(--foreground)] font-sans text-sm font-[600]">
            24 <span className=" opacity-50 ">Products</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default CategorySection;
