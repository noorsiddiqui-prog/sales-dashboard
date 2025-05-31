'use client';

import { HiMenu } from 'react-icons/hi';

interface IHamburgerButtonProps {
    onClick: () => void;
}

const HamburgerButton: React.FC<IHamburgerButtonProps> = ({ onClick }) => {
    return (
        <div
            className={`hover:bg-[var(--hover-icon-color)] rounded-full flex justify-center items-center`} >
            <button
                onClick={onClick}
                aria-label="Open Menu"
                className={`border-none bg-transparent cursor-pointer rounded-full flex justify-center items-center`}
            >
                <HiMenu style={{ color: "var(--icon-color)", height: "20px", width: "20px" }} />
            </button>
        </div>
    );
};

export default HamburgerButton;
