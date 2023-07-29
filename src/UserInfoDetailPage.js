import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserInfoDetailPage.css'; // Import CSS file for styling

const UserInfoDetailPage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?uuid=${userId}`);
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, gender, location, email, dob, phone, cell, picture } = userData;

  return (
    <div className="user-info-detail">
      <h2>User Information Detail</h2>
      <div className="user-profile">
        <div className="profile-image">
          <img src={picture.large} alt="User Profile" />
        </div>
        <div className="user-details">
          <h3>{`${name.title} ${name.first} ${name.last}`}</h3>
          <p><b>Gender:</b> {gender}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Date of Birth:</b> {new Date(dob.date).toLocaleDateString()}</p>
          <p><b>Phone:</b> {phone}</p>
          <p><b>Cell:</b> {cell}</p>
          <p><b>Location:</b> {`${location.city}, ${location.country}`}</p>
          {/* You can display more relevant data here */}
        </div>
      </div>
    </div>
  );
};

export default UserInfoDetailPage;