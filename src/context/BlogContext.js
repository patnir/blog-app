import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      const newId = "" + Math.floor(Math.random() * 999999);
      return [
        ...state,
        {
          id: newId,
          title: `Blog Post #${newId}`,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.id);
    case "add_blogpost2":
      return [
        ...state,
        {
          id: "" + Math.floor(Math.random() * 999999),
          title: `${action.title}`,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const addBlogPost2 = (dispatch) => {
  return (title, navigation) => {
    dispatch({ type: "add_blogpost2", title });
    navigation.navigate("Index");
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, addBlogPost2 },
  []
);
