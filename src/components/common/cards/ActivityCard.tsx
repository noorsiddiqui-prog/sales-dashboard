import { FC } from "react";
interface IActivityCardProps {
    icon: React.ReactNode;
    title: string;
    count: number | string;
}

const ActivityCard: FC<IActivityCardProps> = ({icon, title, count}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[var(--card)]">
        {icon}
      </div>
      <div>
        <p className="text-[var(--light-gray-300)] font-[500] font-sans text-sm">
          {title}
        </p>
        <p className="text-[var(--foreground)] font-[600] font-sans text-lg">
          {count}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
