import { twMerge } from "tailwind-merge";

const Card = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "px-8 py-4 bg-white border rounded-lg shadow",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
