import { twMerge } from "tailwind-merge";

const Button = ({
  size = "medium",
  children,
  className,
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        "text-white font-semibold bg-primary rounded-3xl hover:shadow-lg active:shadow-inner",
        className,
        size === "medium" && "px-6 py-2 text-base",
        size === "large" && "px-8 py-2.5 text-xl"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
