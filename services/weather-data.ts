import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const BASE_URL = "https://open-weather13.p.rapidapi.com/weather";

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${city}`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
