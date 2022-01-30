import React from "react";
import { Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormsControls";
import styles from "../common/FormControls/FormControl.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          type="text"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={Input} />
        remember me
      </div>
      {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"></img>}
      {props.captchaUrl && (
        <Field
          placeholder="Put this captcha"
          name="captcha"
          type="text"
          component={Input}
          validate={[required]}
        />
      )}

      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
