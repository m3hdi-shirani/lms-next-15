import classNames from "classnames";
import Image from "next/image";
import { IconUserProfile } from "../icons/icons";
import { Size } from "../types/size.type";
import { AvatarProps } from "./avatar.types";

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};

const Avatar = ({
  variant = "primary",
  className,
  size = "normal",
  src,
  alt = "",
}: AvatarProps) => {
  const classes = classNames("avatar", className, {
    [`avatar-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });
  return (
    <div
      style={{ width: sizeClasses[size], height: sizeClasses[size] }}
      className={classes}
    >
      {src ? (
        <Image
          src={src}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          alt={alt}
        />
      ) : (
        <IconUserProfile
          width={sizeClasses[size] / 2}
          height={sizeClasses[size] / 2}
        />
      )}
    </div>
  );
};

export default Avatar;
