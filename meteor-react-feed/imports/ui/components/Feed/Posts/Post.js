import React from "react";

import "./Post.css";

const Post = (props) => {
  return (
    <div className="post" key={props._id}>
      <div>
        <p className="userInfo">
          <b>By: {props.userEmail} </b>
        </p>
        <br />
        <p>{props.text}</p>
      </div>
      {props.userId === props.currentUserID && (
        <div className="postOptions">
          <button
            className="edit"
            onClick={props.onEdit(props._id, props.text)}
          >
            <img
              className="icon"
              src="https://img.icons8.com/material-rounded/24/ffffff/edit--v1.png"
            />
          </button>
          <button className="delete" onClick={props.onDelete(props._id)}>
            <img
              className="icon"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/delete-sign.png"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
