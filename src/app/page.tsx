"use client";

import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "../../services/weather-data";

const Home: React.FC = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city: string) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default Home;
