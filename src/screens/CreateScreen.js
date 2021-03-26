import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  return (
    <BlogPostForm
      navigation={navigation}
      currentBlogTitle={""}
      currentBlogContent={""}
      header={"Create"}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

export default CreateScreen;
