import React from "react";

import "./PostForm.css";

const PostForm = (props) => {
  return (
    <div className="postFormContainer">
      <form className="postForm" onSubmit={props.onSubmit}>
        <textarea
          type="text"
          className="postInput"
          placeholder="Type to add new Post"
          value={props.text}
          maxLength="150"
          onChange={(event) => props.setText(event.target.value)}
        />
        <button type="submit" className="postBtn">
          Post
          {/* <img src="https://img.icons8.com/material-outlined/50/ffffff/send-letter.png" /> */}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
