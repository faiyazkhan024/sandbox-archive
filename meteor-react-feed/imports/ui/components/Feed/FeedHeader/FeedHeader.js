import React from "react";

import "./FeedHeader.css";

const FeedHeader = (props) => {
  return (
    <div className="feedHeader">
      <h1>MRF</h1>
      <button className="logout" onClick={props.onLogout}>
        <img src="https://img.icons8.com/ios/50/ffffff/shutdown--v1.png" />
      </button>
    </div>
  );
};

export default FeedHeader;
