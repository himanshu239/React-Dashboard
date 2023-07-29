// Importing necessary modules and hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Defining the UserInfoWidget function component
const UserInfoWidget = () => {

  // Using the useState hook to manage user data
  const [userData, setUserData] = useState(null);

  // Using the useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, gender, location, email, picture } = userData;

   // Rendering the UserInfoWidget component
  return (
    <div className="user-info-widget">
      <h2>User Information</h2>
      <div className="user-profile">
        <img src={picture.large} alt="User Profile" />
        <h3>{`${name.title} ${name.first} ${name.last}`}</h3>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Location:</b> {`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
};

export default UserInfoWidget;