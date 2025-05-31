import React, { FC } from "react";
import HeaderClasses from "@/styles/classes/HeaderClasses";

interface IProps {
    onClick: (value?: any) => void;
    icon: React.ReactNode;
};

const NavIconButton: FC<IProps> = ({ onClick, icon }) => {
    return (
        <button
            onClick={onClick}
            className={HeaderClasses.navIconButton}
        >
            {icon}
        </button>
    );
}

export default NavIconButton;