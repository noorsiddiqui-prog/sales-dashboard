import { FC } from "react";
interface IProps {
  title: string;
}

const ChartTitle: FC<IProps> = ({ title }) => {
  return (
    <div>
      <h2
        className="font-sans text-[var(--foreground)] 
      text-lg font-[500] opacity-80"
      >
        {title}
      </h2>
    </div>
  );
};

export default ChartTitle;
