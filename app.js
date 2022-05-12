
import { getCity , getWeather} from './modules/api.js';

const addCity = async (cityName) => {
    const city = await getCity(cityName);

    getWeather(city.lat, city.lon);
    
}

//1 etapas
document.getElementById('submit-button' ).addEventListener('click', () => {
    const cityName = document.getElementById('city-input').value;

    addCity(cityName)
});
//2kuriam modulius