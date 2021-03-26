import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react/cjs/react.development";

const BlogPostForm = ({
  navigation,
  currentBlogTitle,
  currentBlogContent,
  header,
  onSubmit,
}) => {
  const [title, setTitle] = useState(currentBlogTitle);
  const [content, setContent] = useState(currentBlogContent);
  return (
    <View>
      <Text>{header} Form</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save"
        onPress={() => {
          onSubmit(title, content, () => {
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

export default BlogPostForm;
