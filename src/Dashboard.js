import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import './Dashboard.css';
import WeatherWidget from './WeatherWidget';
import WeatherPage from './WeatherPage';
import BitcoinWidget from './BitcoinWidget';
import BitcoinDetails from './BitcoinDetails';
import PopulationDetail from './PopulationDetail';
import PopulationWidget from './PopulationWidget';

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
                    <WeatherWidget />
                </div>
                <div className="widget">
                    <BitcoinWidget />
                </div>
                <div className="widget">
                    <PopulationWidget />
                </div>
            </div>
            <div className="sidebar">
                <h2>API Details</h2>
                <WeatherPage />
                <BitcoinDetails />
                <PopulationDetail />
            </div>
        </div>
    );
}

export default Dashboard;