import { twMerge } from "tailwind-merge";

const IconButton = ({
  icon,
  children,
  className,
  notification,
  type = "button",
  ...rest
}) => {
  const Icon = icon instanceof Function ? icon : null;

  return (
    <button
      type={type}
      className={twMerge(
        "text-xl rounded-full relative hover:opacity-50 active:opacity-70",
        className
      )}
      {...rest}
    >
      {notification && (
        <div className="w-1.5 h-1.5 bg-red-600 rounded-full absolute right-0.5" />
      )}
      {children ? children : Icon ? <Icon /> : icon}
    </button>
  );
};

export default IconButton;
