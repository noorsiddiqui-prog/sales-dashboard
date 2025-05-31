import { FC } from "react";
import ProfileAvatar from "../common/Avatar/ProfileAvatar";
import HeaderClasses from "@/styles/classes/HeaderClasses";
interface IProps {
    name: string;
    role: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const HeaderAvatar: FC<IProps> = ({ name, role, src, alt, width = 30, height = 30 }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <ProfileAvatar
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-sm"
      />

      <div>
        <p className={HeaderClasses.userNameInfo}>{name}</p>
        <p className={HeaderClasses.userRoleInfo}>{role}</p>
      </div>
    </div>
  );
};

export default HeaderAvatar;
