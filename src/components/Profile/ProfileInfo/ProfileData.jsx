import Contact from "./Contact";
import styles from "../ProfileInfo/ProfileInfo.module.css";

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      <div>
        <b> Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b> About job skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b> About me</b>: {profile.aboutMe}
      </div>
      <div className={styles.contacts}>
        <b> Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      {isOwner && (
        <div className={styles.button}>
          <button onClick={activateEditMode}>&#9998;</button>
        </div>
      )}
    </div>
  );
};
export default ProfileData;
