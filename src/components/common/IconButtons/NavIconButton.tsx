"use client"
import React, { FC } from "react";
import HeaderClasses from "@/styles/classes/HeaderClasses";

interface IProps {
    onClick: (value?: any) => void;
    icon: React.ReactNode;
    className?: string
};

const NavIconButton: FC<IProps> = ({ onClick, icon, className }) => {
    return (
        <button
            onClick={onClick}
            className={className || HeaderClasses.navIconButton}
        >
            {icon}
        </button>
    );
}

export default NavIconButton;