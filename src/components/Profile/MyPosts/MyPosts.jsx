import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormsControls";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
const maxLegth100 = maxLengthCreator(100);

const MyPosts = React.memo(({ postData, addPost, profile, clearPost }) => {
  const posts = postData.map((post) => (
    <Post
      message={post.message}
      likeCount={post.likeCount}
      id={post.id}
      key={post.id}
      icon={profile.photos.large}
    />
  ));
  const createPost = (values) => {
    addPost(values.newPostText);
    clearPost();
  };

  return (
    <div className={style.posts__block}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={createPost} />
      <div className={style.posts}>{posts}</div>
    </div>
  );
});

export default MyPosts;

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name="newPostText"
          validate={[required, maxLegth100]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);
