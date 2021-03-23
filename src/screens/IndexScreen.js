import BlogContext from "../context/BlogContext";
import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="add post" onPress={addBlogPost}></Button>
      <FlatList
        data={data}
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
