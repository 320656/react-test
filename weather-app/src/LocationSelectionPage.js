import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LocationSelectionPage() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const history = useHistory();

  const handleLocationSelect = () => {
    history.push(`/weather/${selectedLocation}`);
  };

  return (
    <div>
      <h1>Select Location</h1>
      <input
        type="text"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        placeholder="Enter Location"
      />
      <button onClick={handleLocationSelect}>Get Weather</button>
    </div>
  );
}

export default LocationSelectionPage;
