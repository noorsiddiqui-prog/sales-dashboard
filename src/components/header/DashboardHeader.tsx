"use client";

import { FC, useState } from "react";
import NavIconButton from "../common/IconButtons/NavIconButton";
import ThemeToggle from "../theme/ThemeToggle";
import HeaderClasses from "@/styles/classes/HeaderClasses";
import { navIcons } from "@/config/constants/Navbar";
import HeaderAvatar from "../profile-avatar/HeaderAvatar";
import HeaderMenu from "../common/Menus/HeaderMenu";
import HamburgerButton from "../common/IconButtons/HamburgerButton";
import DashboardDrawer from "../drawers/DashboardDrawer";

interface IDashboardHeaderProps {}

const DashboardHeader: FC<IDashboardHeaderProps> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <div className={HeaderClasses.headerContainer}>
      <div className="flex">
        <div className="sm:hidden relative block mr-4">
          <HamburgerButton onClick={() => setDrawerOpen(!drawerOpen)} />
        </div>
        <div className={HeaderClasses.menuHeadingButton}>Dashboard</div>
      </div>

      <div className="sm:flex gap-3 hidden">
        <ThemeToggle />
        {navIcons.map((v, i) => {
          return (
            <div key={i}>
              {v.icon ? (
                <>
                  <div key={i}>
                    <NavIconButton
                      icon={<v.icon />}
                      onClick={() => console.log(v.id)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div key={i}>
                    <HeaderAvatar
                      name="Noor Ul Ain"
                      role="Admin"
                      src="https://loremflickr.com/200/200?random=1"
                      alt="Profile"
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="sm:hidden flex gap-2">
        <ThemeToggle />
        <HeaderMenu onClick={() => console.log("Menu")} />
      </div>

      {drawerOpen && (
        <DashboardDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardHeader;
