import { twMerge } from "tailwind-merge";

const BoxShadow = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-full h-full bg-primary-300 rounded-3xl absolute -z-10",
        className
      )}
    />
  );
};

export default BoxShadow;
