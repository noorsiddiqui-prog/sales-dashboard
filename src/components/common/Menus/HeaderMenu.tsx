import { FC, useState } from "react";
import NavIconButton from "../IconButtons/NavIconButton";
import { HiDotsVertical } from "react-icons/hi";
import HorizontalDivider from "../Dividers/HorizontalDivider";
import HeaderAvatar from "@/components/profile-avatar/HeaderAvatar";
import { headerMenuItems } from "@/config/constants/Navbar";

interface IProps {
  icon?: React.ReactNode;
  onClick: (value?: any) => void;
}

const HeaderMenu: FC<IProps> = ({ icon, onClick }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
    onClick();
  };

  return (
    <div>
      <div className="relative">
        <NavIconButton
          icon={icon ? icon : <HiDotsVertical />}
          onClick={handleMenuClick}
        />
        {open && (
          <div className="w-28 h-auto bg-[var(--card)] rounded-lg absolute top-8 right-0 border-1 border-[var(--border)]">
            <ul className="flex flex-col gap-1 text-sm py-2">
              {headerMenuItems.map((v, i) => {
                return (
                  <li key={i}>
                    {v.isProfile ? (
                      <div className="px-2 hover:bg-[var(--hover-icon-color-dark)]">
                        <HeaderAvatar
                        name="Noor Ul Ain"
                        role="Admin"
                        src="https://loremflickr.com/200/200?random=1"
                        alt="Profile"
                        width={20}
                        height={20}
                      />
                      </div>
                    ) : v.isDivider ? (
                      <HorizontalDivider />
                    ) : v.icon ? (
                      <div className="flex items-center gap-1">
                        <NavIconButton
                          icon={<v.icon />}
                          onClick={() => console.log(v.id)}
                        />
                        <p className="text-xs text-[var(--menu-button-color)]">{v.label}</p>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
