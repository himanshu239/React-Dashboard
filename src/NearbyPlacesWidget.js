import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NearbyPlacesWidget = () => {
  const [placesData, setPlacesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://geodb-free-service.wirefreethought.com/v1/geo/places/10733/nearbyPlaces');
        setPlacesData(response.data.data);
      } catch (error) {
        console.error('Error fetching nearby places data:', error);
      }
    };

    fetchData();
  }, []);

  if (placesData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Nearby Places</h2>
      <ul>
        {placesData.map((place) => (
          <li key={place.id}>
            <h3>{place.name}</h3>
            <p><b>Type:</b> {place.type}</p>
            <p><b>Population:</b> {place.population.toLocaleString()}</p>
            <p><b>Country:</b> {place.country}</p>
            <p><b>Region:</b> {place.region}</p>
            <p><b>Distance:</b> {place.distance.toFixed(2)} km</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyPlacesWidget;
