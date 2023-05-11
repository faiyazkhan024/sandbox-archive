import React from "react";

import Post from "./Post";

import banner from "../assets/banner.png";
import profile from "../assets/community-1.webp";

const PostList = () => {
  return (
    <div className="space-y-8">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Post key={idx} postImg={banner} profileImg={profile} />
      ))}
    </div>
  );
};

export default PostList;
