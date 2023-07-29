import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import './General.css';
import UserInfoWidget from './UserInfoWidget';
import UserInfoDetailPage from './UserInfoDetailPage';
import NearbyPlacesWidget from './NearbyPlacesWidget';
import NearbyPlaceDetailPage from './NearbyPlaceDetailPage';
import WeatherWidget from './WeatherWidget';
import WeatherPage from './WeatherPage';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <nav className="navbar">
                <ul>
                    <li><Link to="/tools"><FaTools /> Tools</Link></li>
                </ul>
            </nav>
            <div className="main-content">
                <div className="widget">
                    <UserProfile />
                </div>
                <div className="widget">
                    <UserList />
                </div>
                <div className="widget">
                    <UserInfoWidget />
                </div>
                <div className="widget">
                    <NearbyPlacesWidget />
                </div>
                <div className="widget">
                    <WeatherWidget />
                </div>
              
            </div>
            <div className="sidebar">
                <h2>API Details</h2>
                <UserInfoDetailPage />
                <NearbyPlaceDetailPage/>
                <WeatherPage />
            </div>
        </div>
    );
}

export default Dashboard;