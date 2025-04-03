import axios from 'axios';

export const WEATHER_LOADING = 'WEATHER_LOADING';
export const WEATHER_SUCCESS = 'WEATHER_SUCCESS';
export const WEATHER_FAILURE = 'WEATHER_FAILURE';

const API_KEY = process.env.REACT_APP_WEATHER_MAP_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = (city, country) => async (dispatch) => {

    try {
        dispatch({ type: WEATHER_LOADING });

        const response = await axios.get(API_URL, {
            params: {
                q: `${city}`,
                appid: API_KEY,
                units: `imperial`
            }
        });

        console.log('API Response:', response.data);
        dispatch({ type: WEATHER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: WEATHER_FAILURE, payload: error.response?.data?.message || "Failed to fetch data" });
    }

};

