import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Post from "../screens/Post";
import Comment from "../screens/Comment";
import { createAppContainer } from "react-navigation";

const Navigation = createStackNavigator({
  post: Post,
  comment: Comment,
});

export default createAppContainer(Navigation);
