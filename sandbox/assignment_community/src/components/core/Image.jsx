import { twMerge } from "tailwind-merge";

const Image = ({ src, profile, banner, className }) => {
  return (
    <img
      src={src}
      className={twMerge(
        "object-cover object-center",
        banner && "h-72 object-fill w-full",
        profile && "w-8 h-8 shadow rounded-full object-top",
        className
      )}
    />
  );
};

export default Image;
