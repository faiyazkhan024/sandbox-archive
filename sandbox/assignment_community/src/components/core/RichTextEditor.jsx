import { useState } from "react";
import { twMerge } from "tailwind-merge";

import IconButton from "../core/IconButton";

import { RTE_TOOLBAR_ICON } from "../../data";

const RichTextEditor = ({ name }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={twMerge(
        "mt-4 border border-slate-300 rounded-lg",
        focus && "border-slate-500"
      )}
    >
      <textarea
        rows={5}
        id={name}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full border-0 rounded-t-lg focus:ring-0"
      />
      <div className="flex gap-2 px-2 py-1 text-gray-600 border-t">
        {RTE_TOOLBAR_ICON.map((icon, idx) => (
          <IconButton
            key={idx}
            icon={icon}
            type="button"
            className="text-base"
          />
        ))}
      </div>
    </div>
  );
};

export default RichTextEditor;
