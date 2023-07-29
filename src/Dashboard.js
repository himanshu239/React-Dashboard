// Importing necessary modules and components
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import './General.css';
import UserInfoWidget from './UserInfoWidget';

import NearbyPlacesWidget from './NearbyPlacesWidget';

import WeatherWidget from './WeatherWidget';

// Defining the Dashboard function component
const Dashboard = () => {

    // Rendering the Dashboard component
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
                <Link to="/user-info" className="sidebar-link">User Info Details</Link>
<Link to="/nearby-places" className="sidebar-link">Nearby Places Details</Link>
<Link to="/weather" className="sidebar-link">Weather Details</Link>
            </div>
        </div>
    );
}

export default Dashboard;

