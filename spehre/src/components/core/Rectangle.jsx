import { twMerge } from "tailwind-merge";

const Rectangle = ({ className }) => {
  return (
    <div
      className={twMerge(
        "absolute w-1/2 h-full bg-primary-100 -z-10",
        className
      )}
    />
  );
};

export default Rectangle;
