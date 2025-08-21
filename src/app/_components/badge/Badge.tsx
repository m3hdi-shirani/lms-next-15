import classNames from "classnames";
import { Size } from "../types/size.type";
import { BadgeProps } from "./badge.types";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "badge-md",
  large: "badge-lg",
};

const Badge = ({ variant, className, children, size = "tiny" }: BadgeProps) => {
  const classes = classNames("badge", className, {
    [`badge-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return <span className={classes}>{children}</span>;
};

export default Badge;
