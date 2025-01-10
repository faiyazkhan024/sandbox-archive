import React from "react";

import { BsDot } from "react-icons/bs";

import classes from "./ChatMembers.module.css";

const ChatMembers = ({ users }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Heading}>
        <h2>Group Members</h2>
      </div>
      <div className={classes.MemberList}>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <div className={classes.User}>
              <h4>
                {user.name} <BsDot className={classes.Active} />
              </h4>
            </div>
            <div className={classes.Separator} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatMembers;
