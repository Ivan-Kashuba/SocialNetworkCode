import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormsControls";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLegth10 = maxLengthCreator(10);

const MyPosts = ({ postData, addPost }) => {
  const posts = postData.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} />
  ));

  const createPost = (values) => {
    addPost(values.newPostText);
  };

  return (
    <>
      <div className={style.posts__block}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={createPost} />
        <div className={style.posts}>{posts}</div>
      </div>
    </>
  );
};

export default MyPosts;

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name="newPostText"
          validate={[required, maxLegth10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);
