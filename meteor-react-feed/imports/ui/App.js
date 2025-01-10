import React from "react";

import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

import Auth from "./pages/Auth/Auth";
import Feed from "./pages/Feed/Feed";

const App = () => {
  const user = useTracker(() => Meteor.user());

  return <div>{user ? <Feed /> : <Auth />}</div>;
};

export default App;
