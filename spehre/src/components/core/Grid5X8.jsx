import { twMerge } from "tailwind-merge";

import grid5X8 from "../../assets/grid-5X8.svg";

const Grid5X8 = ({ className }) => {
  return (
    <img
      src={grid5X8}
      alt="Grid 5X8"
      className={twMerge("w-28 h-auto absolute", className)}
    />
  );
};

export default Grid5X8;
