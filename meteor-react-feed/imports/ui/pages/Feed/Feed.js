import React, { useState } from "react";

import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

import FeedHeader from "../../components/Feed/FeedHeader/FeedHeader";
import PostForm from "../../components/Feed/PostForm/PostForm";
import Post from "../../components/Feed/Posts/Post";

import postCollection from "../../../api/collections/post";

import "./Feed.css";

const Feed = () => {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState("");

  const posts = useTracker(() =>
    postCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  const submitHandler = (event) => {
    event.preventDefault();

    if (!text) return;
    if (isEditing) {
      Meteor.call("post.update", { text, postId: isEditing });
      setText("");
      return setIsEditing("");
    }

    Meteor.call("post.create", text);
    setText("");
  };

  const editProduct = (postId, text) => () => {
    setText(text);
    setIsEditing(postId);
  };

  const deletePost = (postId) => () => Meteor.call("post.remove", postId);

  const logout = () => Meteor.logout();

  return (
    <>
      <FeedHeader onLogout={logout} />
      <PostForm setText={setText} onSubmit={submitHandler} text={text} />
      <div className="postContainer">
        {posts.map((post) => (
          <Post
            {...post}
            key={post._id}
            currentUserID={Meteor.userId()}
            onDelete={deletePost}
            onEdit={editProduct}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;
