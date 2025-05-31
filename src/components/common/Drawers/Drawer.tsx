import HeaderAvatar from "@/components/profile-avatar/HeaderAvatar";
import { FC } from "react";
import { Navbar } from "@/config/constants/Navbar";
import Link from "next/link";
import HorizontalDivider from "../Dividers/HorizontalDivider";
import { HiX } from "react-icons/hi";
interface IDrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer: FC<IDrawerProps> = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <div className="z-100 overflow-y-auto relative h-full w-[auto] bg-[var(--card)] shadow-2xl">
          <div className="absolute rounded-full border-1 border-[var(--border)] top-2 right-1 overflow-visible cursor-pointer">
            <HiX
              onClick={onClose}
              style={{
                color: "var(--icon-color)",
                height: "12px",
                width: "12px",
              }}
            />
          </div>
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
        </div>
      )}
    </>
  );
};
export default Drawer;
