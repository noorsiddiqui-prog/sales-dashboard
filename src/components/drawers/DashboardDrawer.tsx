import { FC } from "react";
import Drawer from "../common/Drawers/Drawer";
import HeaderAvatar from "../profile-avatar/HeaderAvatar";
import { Navbar } from "@/config/constants/Navbar";
import Link from "next/link";
import HorizontalDivider from "../common/Dividers/HorizontalDivider";
interface IDashboardDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DashboardDrawer: FC<IDashboardDrawerProps> = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-100 relative w-full h-full"></div>
          <div className="absolute z-100 left-0 top-0">
            <Drawer
              open={open}
              onClose={onClose}
              children={
                <div className="relative min-h-screen flex items-start w-[100%] py-4 mt-6">
                  <div className="hover:bg-[var(--hover-icon-color-dark)]">
                    <div className="px-4">
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
                              <div className="py-2">
                                <HorizontalDivider />
                              </div>
                            ) : (
                              <Link
                                href={v.href || "#"}
                                className="px-4 py-6 text-[var(--menu-button-color)] font-[500] font-sans text-xs no-underline transition-colors duration-200 focus:outline-none hover:text-[var(--menu-button-hover-color)]"
                              >
                                {v.label}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </>
      )}
    </div>
  );
};
export default DashboardDrawer;
