"use client";

interface WeatherDisplayProps {
  weather: {
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
    name: string;
  };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp}°C</p>
    </div>
  );
};

export default WeatherDisplay;
