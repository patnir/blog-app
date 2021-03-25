import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blog) => blog.id === id);
  return (
    <View>
      <Text>Show Screen</Text>
      {id}
      {blogPost.title}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
