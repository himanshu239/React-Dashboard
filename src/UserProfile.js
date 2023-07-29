// Importing necessary modules and hooks
import { auth } from './firebase';

// Defining the UserProfile function component
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