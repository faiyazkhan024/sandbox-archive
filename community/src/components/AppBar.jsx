import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AiFillAppstore, AiOutlineBell } from "react-icons/ai";

import Image from "./core/Image";
import Search from "./core/Search";
import Button from "./core/Button";
import IconButton from "./core/IconButton";
import Typography from "./core/Typography";

import profile from "../assets/profile.jpg";

const ExploreAndFeedSwitch = () => {
  const activeClass = "bg-white rounded shadow";
  const [view, setView] = useState("explore");

  return (
    <div className="px-3 py-1 space-x-2 rounded shadow-inner bg-primary">
      <Button
        onClick={() => setView("explore")}
        className={twMerge("py-0 px-3", view === "explore" && activeClass)}
      >
        Explore
      </Button>
      <Button
        onClick={() => setView("feed")}
        className={twMerge("py-0 px-3", view === "feed" && activeClass)}
      >
        Community feed
      </Button>
    </div>
  );
};

const AppBar = () => {
  return (
    <header className="flex items-center gap-4 px-4 py-2 bg-white shadow">
      <Typography flex variant="h1">
        <AiFillAppstore />
        Community
      </Typography>
      <ExploreAndFeedSwitch />
      <Search />
      <IconButton notification icon={AiOutlineBell} />
      <Button
        variant="text"
        position="end"
        icon={<Image profile src={profile} />}
      >
        Ayaat Khanna
      </Button>
    </header>
  );
};

export default AppBar;
