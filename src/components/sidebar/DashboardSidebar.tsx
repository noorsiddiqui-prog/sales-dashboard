import { FC } from "react";
import HeaderAvatar from "../profile-avatar/HeaderAvatar";
import { Navbar } from "@/config/constants/Navbar";
import HorizontalDivider from "../common/Dividers/HorizontalDivider";
import Link from "next/link";
interface IDashboardSidebarProps {}

const DashboardSidebar: FC<IDashboardSidebarProps> = (props) => {
  return (
    <div className="relative min-h-screen items-start sm:w-[15%] lg:w-[15%] md:w-[25%] xs:w-[5%] sm:w-[70px] w-[50px] py-4 bg-[var(--card)] ">
      <div className="justify-center text-[var(--logo-color)] text-2xl font-bold font-sans items-center mt-2 sm:flex hidden">
        Salestics
      </div>

      <div className="mt-8">
        {Navbar.links.map((v, i) => {
          return (
            <div key={i}>
              {v.isDivider ? (
                <div className=" w-full" key={i}>
                  <HorizontalDivider />
                </div>
              ) : (
                <div
                  className="md:px-2 h-18 hover:bg-[var(--hover-icon-color-dark)] flex justify-between items-center"
                  key={i}
                >
                  <div className=" border-0 rounded-xl sm:h-14 h-8 md:w-full w-[auto] md:px-2 px-2 lg:px-4 hover:bg-[var(--logo-color)] flex items-center">
                    <Link
                      href={v.href || "#"}
                      className="
                    lg:px-6 py-6 text-[var(--menu-button-color)] 
                    font-[500] font-sans text-[16px] no-underline
                    transition-colors duration-200 focus:outline-none
                    hover:text-[var(--menu-button-hover-color)]
                    w-full flex items-center text-align-left
                    "
                    >
                      {v.icon && (
                        <div className="md:mr-3">
                          <v.icon style={{ fontSize: "20px" }} />
                        </div>
                      )}
                      <div className="flex justify-center text-align-left md:flex hidden">
                        {v.label}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-10 md:flex justify-center hidden w-full ml-[-10px]">
        <HeaderAvatar
          name="Noor Ul Ain"
          role="Admin"
          src="https://loremflickr.com/200/200?random=1"
          alt="Profile"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};
export default DashboardSidebar;
