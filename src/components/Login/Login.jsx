import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import { login } from "../../MyRedux/auth-reducer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
