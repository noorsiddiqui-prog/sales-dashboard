import { FC } from "react";

interface IProps {}

const HorizontalDivider: FC<IProps> = () => {
  return (
    <div>
        <div className="w-full h-[1px] bg-[var(--border)]"></div>
    </div>
  );
};

export default HorizontalDivider;
