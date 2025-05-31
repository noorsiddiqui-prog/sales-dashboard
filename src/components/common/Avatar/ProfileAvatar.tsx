import Image from "next/image";
import { FC } from "react";
interface IProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ProfileAvatar: FC<IProps> = ({
  src,
  alt,
  width = 40,
  height = 40,
  className,
}) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};
export default ProfileAvatar;
