import { twMerge } from "tailwind-merge";

import grid4X8 from "../../assets/grid-4x8.svg";

const Grid4X8 = ({ className }) => {
  return (
    <img
      src={grid4X8}
      alt="Grid 4X8"
      className={twMerge("w-20 h-auto absolute", className)}
    />
  );
};

export default Grid4X8;
