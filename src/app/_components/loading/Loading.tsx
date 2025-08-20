import classNames from "classnames";
import { Size } from "../types/size.type";
import { LoadingProps } from "./loading.type";

const sizeclasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

const Loading = ({
  types = "spinner",
  variant,
  size = "normal",
  className,
}: LoadingProps) => {
  const classes = classNames("loading", className, {
    [`loading-${types}`]: types,
    [`loading-${variant}`]: variant,
    [`${sizeclasses[size]}`]: size,
  });

  return <span className={classes}>Loading</span>;
};

export default Loading;
