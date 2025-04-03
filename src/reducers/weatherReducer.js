import { WEATHER_FAILURE, WEATHER_LOADING, WEATHER_SUCCESS } from "../actions/weatherActions";

const initialState = {
    loading: false,
    weatherData: {},
    error: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_LOADING:
            return { ...state, loading: true, error: null };
        case WEATHER_SUCCESS:
            return { ...state, loading: false, weatherData: action.payload, error: null };
        case WEATHER_FAILURE:
            return { ...state, loading: false, weatherData: {}, error: action.payload };
        default:
            return state;
    }
};

export default weatherReducer;

