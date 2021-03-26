import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react/cjs/react.development";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost2 } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
        title="Add Blog Post"
        onPress={() => addBlogPost2(title, navigation)}
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

export default CreateScreen;
