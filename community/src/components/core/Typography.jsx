import { twMerge } from "tailwind-merge";

const Typography = ({
  flex,
  children,
  className,
  component,
  variant = "p",
  ...rest
}) => {
  const components = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
  const Component = component ?? components.includes(variant) ? variant : "p";

  return (
    <Component
      className={twMerge(
        flex && "flex items-center gap-1",
        variant === "h1" && "text-xl font-medium",
        variant === "h2" && "text-2xl font-medium",
        variant === "h3" && "text-xl font-bold",
        variant === "h4" && "text-lg font-medium",
        variant === "xs" && "text-xs text-gray-600",
        variant === "sm" && "text-sm text-gray-600",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
