"use client";

interface WeatherDisplayProps {
  weather: {
    temp: number;
    weather: {
      description: string;
    };
    city_name: string;
  };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2>{weather.city_name}</h2>
      {weather.weather ? (
        <p>{weather.weather.description}</p>
      ) : (
        <p>No weather description available</p>
      )}
      {weather.temp !== undefined ? (
        <p>{weather.temp}°C</p>
      ) : (
        <p>No temperature data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
