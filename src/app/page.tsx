"use client";

import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "../../services/weather-data";

const Home: React.FC = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default Home;
