import { auth } from './firebase';

const UserProfile = () => {
  const user = auth.currentUser;

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <h3>{user.displayName}</h3>
      <p>{user.email}</p>
    </div>
  );
}


export default UserProfile;