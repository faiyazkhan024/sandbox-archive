import { twMerge } from "tailwind-merge";

const Typography = ({
  flex,
  color,
  children,
  className,
  component,
  variant = "p",
  ...rest
}) => {
  const components = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
  const Component =
    component ?? components.includes(variant)
      ? variant
      : variant === "subtitle"
      ? "h6"
      : "p";

  return (
    <Component
      className={twMerge(
        "relative leading-7",
        flex && "flex items-center gap-1",
        color === "primary" && "text-primary",
        color === "primary-dark" && "text-primary-700",
        color === "secondary" && "text-secondary",
        variant === "h2" && "max-w-2xl text-6xl font-bold leading-tight",
        variant === "h4" && "text-3xl font-semibold leading-9",
        variant === "h6" && "text-xl font-medium leading-7",
        variant === "subtitle" &&
          "mt-6 mb-12 max-w-md text-xl font-medium leading-8",
        variant === "xl" && "text-xl font-medium leading-9",
        variant === "sm" && "text-sm font-medium leading-6",
        variant === "xs" && "text-xs font-medium leading-5",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
