// api.ts
import axios from 'axios';

const apiKey = '1cfb51890d921391b6eea2795ccc3df8';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city: string) => {
  try {
    const response = await axios.get(`${baseUrl}?q=${city}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default getWeather
