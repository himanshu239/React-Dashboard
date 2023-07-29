import axios from 'axios';
import { useState, useEffect } from 'react';

function WeatherWidget() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=44.4097177&longitude=-79.6614369&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the weather data:', error);
            });
    }, []);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Weather Data</h1>
            <p>Temperature: {weatherData.current_weather.temperature}</p>
            <p>Wind Speed: {weatherData.current_weather.windspeed}</p>
            <p>Wind Direction: {weatherData.current_weather.winddirection}</p>
            {/* You can display more data as needed */}
        </div>
    );
}

export default WeatherWidget;
