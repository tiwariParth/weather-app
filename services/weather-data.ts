import axios from "axios";

const API_KEY = "a9b9dd1b31mshb69bed470c4ef7cp1b7d2fjsn84032a859d6d";
const BASE_URL = "https://open-weather13.p.rapidapi.com/city";

export const fetchWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/${city}`, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  });
  return response.data;
};
