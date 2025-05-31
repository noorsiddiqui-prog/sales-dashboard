import { FC } from "react";
import { HiX } from "react-icons/hi";
interface IDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: FC<IDrawerProps> = ({ open, onClose, children }) => {
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
          {children}
        </div>
      )}
    </>
  );
};
export default Drawer;
