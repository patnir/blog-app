import { Context as BlogContext } from "../context/BlogContext";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { editBlogPost, state } = useContext(BlogContext);
  const id = navigation.getParam("id");
  const blogPost = state.find((blog) => blog.id === id);
  return (
    <BlogPostForm
      navigation={navigation}
      currentBlogTitle={blogPost.title}
      currentBlogContent={blogPost.content}
      header={"Create"}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

export default EditScreen;
