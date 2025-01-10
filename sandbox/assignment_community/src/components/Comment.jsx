import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsEmojiSmile, BsCardImage } from "react-icons/bs";

import Image from "./core/Image";
import IconButton from "./core/IconButton";

import profile from "../assets/profile.jpg";

const Comment = ({ onEmoji, onImage, ...rest }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={twMerge(
        "flex items-center border mx-8 bg-blue-100 rounded-3xl",
        focus && "border-slate-500"
      )}
    >
      <Image src={profile} profile className="w-10 h-10" />
      <input
        type="text"
        placeholder="Write a comment"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="flex-1 bg-transparent border-0 focus:ring-0"
        {...rest}
      />
      <div className="flex gap-3 pr-4 text-gray-500">
        <IconButton icon={BsEmojiSmile} onClick={onEmoji} />
        <IconButton icon={BsCardImage} onClick={onImage} />
      </div>
    </div>
  );
};

export default Comment;
