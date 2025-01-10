import { Mongo } from "meteor/mongo";

const postCollection = new Mongo.Collection("post");

export default postCollection;
