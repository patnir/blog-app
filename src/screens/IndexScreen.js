import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  console.log(state);
  return (
    <View>
      <Button title="add post" onPress={addBlogPost}></Button>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderColor: "gray",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 25,
  },
});

export default IndexScreen;
