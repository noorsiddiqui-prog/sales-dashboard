import { FC } from "react";
import Drawer from "../common/Drawers/Drawer";
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
            <Drawer open={open} onClose={onClose} />
          </div>
        </>
      )}
    </div>
  );
};
export default DashboardDrawer;
