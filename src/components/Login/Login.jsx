import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import { login } from "../../MyRedux/auth-reducer.ts";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import s from "./Login.module.css";

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
