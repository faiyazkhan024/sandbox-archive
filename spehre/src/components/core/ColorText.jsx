import { twMerge } from "tailwind-merge";

const ColorText = ({ children, primaryDark, primary }) => {
  return (
    <span
      className={twMerge(
        primary && "text-primary",
        primaryDark && "text-primary-700"
      )}
    >
      {children}
    </span>
  );
};

export default ColorText;
