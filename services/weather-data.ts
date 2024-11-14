import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const BASE_URL = "https://weatherbit-v1-mashape.p.rapidapi.com/current";

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { city },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    });
    const weatherData = response.data.data[0];
    return {
      temp: weatherData.temp,
      weather: weatherData.weather,
      city_name: weatherData.city_name,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
