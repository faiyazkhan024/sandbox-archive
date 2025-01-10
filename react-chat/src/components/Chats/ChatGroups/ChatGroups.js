import React from "react";

import { BiSearch, BiCommentAdd } from "react-icons/bi";

import IconButton from "../../utilities/IconButton/IconButton";

import classes from "./ChatGroups.module.css";

const ChatGroups = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.TopBar}>
        <h2>Groups</h2>
        <div className={classes.Options}>
          <IconButton Icon={BiSearch} className={classes.Search} />
          <IconButton Icon={BiCommentAdd} className={classes.Add} />
        </div>
      </div>
      <div className={classes.GroupList}></div>
    </div>
  );
};

export default ChatGroups;
