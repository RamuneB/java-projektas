import {API_KEY, BASE_URL} from './constants.js';

const getCity = async (cityName) => {
    const response = await fetch(`${BASE_URL}/geo/1.0/direct?q=${cityName},&appid=${API_KEY}`);
    const cities = await response.json();
   // console.log(cities);

   return cities[0];
}

const getWeather = async (lat, lon) => {
    const response = await fetch(`${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const weather = await response.json();

    console.log(weather);
}
export {getCity, getWeather};