import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Input, TextArea } from "../../common/FormControls/FormsControls";
import s from "./ProfileInfo.module.css";
import styles from "../../common/FormControls/FormControl.module.css";

let ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {error && <div className={styles.formSummaryError}>{error}</div>}
      </div>
      <div>
        Full name:
        <Field placeholder="Full name" name="fullName" component={Input} />
      </div>
      <div>
        <b> Looking for a job </b>:
        <Field name="lookingForAJob" type="checkbox" component={Input} />
      </div>
      <div>
        <b> About professionals skills</b>:
        <Field
          placeholder="Describe your skills"
          name="lookingForAJobDescription"
          component={TextArea}
        />
      </div>

      <div>
        <b> About me</b>:
        <Field
          placeholder="Tell about yourself"
          name="aboutMe"
          component={TextArea}
        />
      </div>

      <div>
        <b> Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}</b>
              <Field
                placeholder={key}
                name={`contacts.${key}`}
                component={Input}
              />
            </div>
          );
        })}
      </div>
      <div className={s.button}>
        <button>&#10004;</button>
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormRedux;
