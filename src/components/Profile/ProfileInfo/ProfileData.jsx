import Contact from "./Contact";

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={activateEditMode}>Edit</button>
        </div>
      )}
      <div>{profile.fullName}</div>
      <div>
        <b> Looking for a job </b>:{profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b> About job skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b> About me</b>: {profile.aboutMe}
      </div>
      <div>
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
    </div>
  );
};
export default ProfileData;
