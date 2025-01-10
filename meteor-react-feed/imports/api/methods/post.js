import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

import postCollection from "../collections/post";

Meteor.methods({
  "post.create": (text) => {
    check(text, String);

    if (!Meteor.userId()) throw new Meteor.Error("Not authorized.");

    postCollection.insert({
      text,
      userId: Meteor.userId(),
      userEmail: Meteor.user().emails[0].address,
      createdAt: new Date(),
    });
  },

  "post.remove": (postId) => {
    check(postId, String);

    if (!Meteor.userId()) throw new Meteor.Error("Not authorized.");

    postCollection.remove(postId);
  },

  "post.update": ({ postId, text }) => {
    check(postId, String);
    check(text, String);

    if (!Meteor.userId()) throw new Meteor.Error("Not authorized.");

    postCollection.update(postId, {
      text,
      userId: Meteor.userId(),
      userEmail: Meteor.user().emails[0].address,
      createdAt: new Date(),
    });
  },
});
