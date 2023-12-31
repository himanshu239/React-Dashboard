// Importing necessary modules and hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherPage.css';


// Defining the WeatherPage function component
function WeatherPage() {

        // Using the useState hook to manage weather data
    const [weatherData, setWeatherData] = useState(null);

    // Using the useEffect hook to fetch weather data when the component mounts
    useEffect(() => {
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=44.4097177&longitude=-79.6614369&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the weather data:', error);
            });
    }, []);

    // If weather data has not yet been fetched, display a loading message
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { temperature, windspeed, winddirection } = weatherData.current_weather;

    // Rendering the WeatherPage component
    return (
        <div className="weather-page">
            <h1>Weather Details</h1>
            <div className="weather-detail">
                <p><b>Temperature:</b> {temperature} °C</p>
                <p><b>Wind Speed:</b> {windspeed} km/h</p>
                <p><b>Wind Direction:</b> {winddirection} degrees</p>
            </div>
            <p className="weather-tip">Tip: Wind direction is measured in "meteorological degrees".</p>
        </div>
    );
}

export default WeatherPage;
