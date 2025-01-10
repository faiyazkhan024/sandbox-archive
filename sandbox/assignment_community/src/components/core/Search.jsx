import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ className, inputClass, ...rest }) => {
  const [focus, setFocus] = useState(false);

  return (
    <label
      htmlFor="search"
      className={twMerge(
        "px-2 py-1 text-gray-400 border rounded flex-1 flex items-center gap-1",
        focus && "border-gray-800 text-gray-800",
        className
      )}
    >
      <AiOutlineSearch />
      <input
        id="search"
        name="search"
        type="search"
        placeholder="search"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={twMerge("w-full p-0 border-0 focus:ring-0", inputClass)}
        {...rest}
      />
    </label>
  );
};

export default Search;
