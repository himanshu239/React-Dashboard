// Importing necessary modules and hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlaceDetailPage.css'; 


// Defining the NearbyPlaceDetailPage function component
const NearbyPlaceDetailPage = () => {

    // Using the useState hook to manage place data
  const [placeData, setPlaceData] = useState(null);

  // Using the useEffect hook to fetch place data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://geodb-free-service.wirefreethought.com/v1/geo/places/10733/nearbyPlaces');
        setPlaceData(response.data.data[0]); 
      } catch (error) {
        console.error('Error fetching place data:', error);
      }
    };

    fetchData();
  }, []);

  // If place data has not yet been fetched, display a loading message
  if (!placeData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    type,
    country,
    region,
    latitude,
    longitude,
    population,
    distance,
  } = placeData;

    // Rendering the NearbyPlaceDetailPage component
  return (
    <div className="place-detail-page">
      <h2>{name}</h2>
      <p><b>Type:</b> {type}</p>
      <p><b>Country:</b> {country}</p>
      <p><b>Region:</b> {region}</p>
      <p><b>Latitude:</b> {latitude}</p>
      <p><b>Longitude:</b> {longitude}</p>
      <p><b>Population:</b> {population.toLocaleString()}</p>
      <p><b>Distance:</b> {distance.toFixed(2)} km</p>
    </div>
  );
};

export default NearbyPlaceDetailPage;