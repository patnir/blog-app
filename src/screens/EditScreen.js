import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react/cjs/react.development";

const EditScreen = ({ navigation }) => {
  const { editBlogPost, state } = useContext(BlogContext);
  const id = navigation.getParam("id");
  const blogPost = state.find((blog) => blog.id === id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <Text style={styles.label}>Enter title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save"
        onPress={() => {
          editBlogPost(id, title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default EditScreen;
