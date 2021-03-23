import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);
  console.log(state);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="add post" onPress={addBlogPost}></Button>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
