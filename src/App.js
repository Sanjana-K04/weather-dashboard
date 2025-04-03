// src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './actions/weatherActions';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const dispatch = useDispatch();

  const weatherData = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city) {
      dispatch(fetchWeatherData(city));
      setIsSearchClicked(true);
    }
  };
  return (
    <div className="App">
      <div className='input-container'>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search" onClick={handleSearch}>
          <span className="text">Search</span>
          <span className="icon">🔍</span>
        </button>
      </div>
      {isSearchClicked && weatherData && <WeatherCard />}
    </div>
  );
}

export default App;


