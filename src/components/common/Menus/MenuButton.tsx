"use client";
import { FC, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HorizontalDivider from "../Dividers/HorizontalDivider";
import { chartMenuItems } from "@/config/constants/Navbar";

interface IMenuButtonProps {
    onChange: (value?: any) => void
}

const MenuButton: FC<IMenuButtonProps> = ({onChange}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const onSelect = (value?: any) => {
    onChange(value);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={handleMenuClick}
        className="
        flex justify-between items-center gap-2 border-0
        bg-[var(--light-gray-200)] hover:bg-[var(--hover-icon-color-dark)] rounded-lg
        px-2 py-1 text-[var(--foreground)] opacity-50 font-sans text-md font-[500]
        cursor-pointer h-8 min-w-22
        "
      >
        <div>Menu</div>
        <IoIosArrowDown style={{ fontSize: "16px" }} />
      </button>

      {open && (
        <div className="w-28 h-auto bg-[var(--card)] rounded-lg absolute top-8 right-0 border-1 border-[var(--border)]">
          <ul className="flex flex-col gap-1 text-sm py-2">
            {chartMenuItems.map((v, i) => {
              return (
                <li key={i} onClick={onSelect}>
                  {v.isDivider ? (
                    <HorizontalDivider />
                  ) : v.label ? (
                    <div className="hover:bg-[var(--hover-icon-color-dark)]">
                      <p className="pl-2 py-0.5 text-xs font-sans font-[500] text-[var(--foreground)] opacity-70 cursor-pointer">
                        {v.label}
                      </p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
