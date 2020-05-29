import axios from 'axios';
const API_KEY= '4f5350a22a865da7f4eee195a973ffe8';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER ='FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER,
        //payload is data that contains additional ppt
        payload: request
    };
}

//the purpose of redux promise is to unwrap the data so we only
//have to work with the data, not the reducers