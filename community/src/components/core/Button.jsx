import { twMerge } from "tailwind-merge";

const Button = ({
  icon,
  size,
  variant,
  children,
  className,
  type = "button",
  position = "start",
  ...rest
}) => {
  const Icon = icon instanceof Function ? icon : null;

  return (
    <button
      type={type}
      className={twMerge(
        "px-2 py-1 rounded hover:shadow active:shadow-inner",
        size === "small" && "text-xs",
        icon && "flex gap-2 items-center",
        variant === "text" &&
          "p-0 hover:shadow-none hover:underline active:shadow-none active:underline-offset-2",
        variant === "contained" && "text-gray-600 bg-gray-100",
        variant === "outlined" && " border border-gray-800",
        className
      )}
      {...rest}
    >
      {position === "start" && (Icon ? <Icon /> : icon)}
      {children}
      {position === "end" && (Icon ? <Icon /> : icon)}
    </button>
  );
};

export default Button;
