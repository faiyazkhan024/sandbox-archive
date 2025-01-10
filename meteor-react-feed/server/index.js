import { Meteor } from "meteor/meteor";

import "../imports/api/methods/post";

Meteor.startup(() => {
  console.log("server is listening");
});
