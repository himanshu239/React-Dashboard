// Importing necessary modules and hooks
import axios from 'axios';
import { useState, useEffect } from 'react';

// Defining the WeatherWidget function component
function WeatherWidget() {

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

    // Rendering the WeatherWidget component
    return (
        <div className="widget">
            <h3>Weather Data</h3>
            <p><b>Temperature:</b> {weatherData.current_weather.temperature}°C</p>
            <p><b>Wind Speed:</b> {weatherData.current_weather.windspeed} km/h</p>
            <p><b>Wind Direction:</b> {weatherData.current_weather.winddirection}</p>
        </div>
    );
}

export default WeatherWidget;

