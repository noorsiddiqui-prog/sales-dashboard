import { FC } from "react";
import HeaderAvatar from "../profile-avatar/HeaderAvatar";
import { Navbar } from "@/config/constants/Navbar";
import HorizontalDivider from "../common/Dividers/HorizontalDivider";
import Link from "next/link";
interface IDashboardSidebarProps {}

const DashboardSidebar: FC<IDashboardSidebarProps> = (props) => {
  return (
    <div className="relative min-h-screen items-start sm:w-[15%] w-[20%] py-4 bg-[var(--card)] sm:flex hidden flex-col ">
      <div className="px-6">
        <HeaderAvatar
          name="Noor Ul Ain"
          role="Admin"
          src="https://loremflickr.com/200/200?random=1"
          alt="Profile"
          width={30}
          height={30}
        />
      </div>

      <div className="mt-2">
        {Navbar.links.map((v, i) => {
          return (
            <div key={i}>
              {v.isDivider ? (
                <div className=" w-full" key={i}>
                  <HorizontalDivider />
                </div>
              ) : (
                <div
                  className="py-4 hover:bg-[var(--hover-icon-color-dark)]"
                  key={i}
                >
                  <Link
                    href={v.href || "#"}
                    className="
                    px-6 py-6 text-[var(--menu-button-color)] 
                    font-[500] font-sans text-[16px] no-underline
                    transition-colors duration-200 focus:outline-none
                    hover:text-[var(--menu-button-hover-color)]
                    w-full
                    "
                  >
                    {v.label}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DashboardSidebar;
