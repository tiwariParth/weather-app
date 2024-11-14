"use client";

import { useState } from "react";

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="input"
      />
      <button type="submit" className="btn">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
