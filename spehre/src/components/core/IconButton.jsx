import { twMerge } from "tailwind-merge";

const IconButton = ({
  icon,
  className,
  children,
  type = "button",
  ...rest
}) => {
  const Icon = icon instanceof Function ? icon : null;

  return (
    <button
      type={type}
      className={twMerge(
        "rounded-full hover:shadow-lg active:shadow-inner",
        className
      )}
      {...rest}
    >
      {children ? children : Icon ? <Icon /> : icon}
    </button>
  );
};

export default IconButton;
