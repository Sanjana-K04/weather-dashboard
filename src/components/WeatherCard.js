import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PressureChart from "./PressureChart";
import HumidityChart from "./HumidityChart";
import { WiFahrenheit, WiThermometer, WiStrongWind, WiSunset } from "react-icons/wi";
import { IoEyeOutline } from "react-icons/io5";
import { Chart as ChartJS } from 'chart.js';
import './WeatherCard.css';


const WeatherCard = () => {
    const { loading, weatherData, error } = useSelector((state) => state.weather);
    useEffect(() => {
        return () => {
            ChartJS.getChart("bar-chart")?.destroy();
            ChartJS.getChart("doughnut-chart")?.destroy();
        };
    }, []);

    if (loading) return <div>Loading..</div>
    if (error) return <div>Error:{error}</div>
    if (!weatherData) {
        return <div>No weather data available</div>
    }

    const formatUnixTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    const sunset = formatUnixTime(weatherData.sys.sunset);

    const humidity = weatherData.main.humidity;

    const ground_level = weatherData.main.grnd_level;
    const pressure = weatherData.main.pressure;
    const sea_level = weatherData.main.sea_level;

    const visibility = (weatherData.visibility) / 1609.34;

    return (
        <div className="card">
            <div className="description">
                <div className="place">
                    <p>{weatherData.name}</p>
                </div>
                <div className="temperature">
                    <div className="thermometer">
                        <WiThermometer />
                    </div>
                    <div className="temp">
                        <h2>{weatherData.main.temp.toFixed()}<WiFahrenheit /></h2>
                        <h4>H:{weatherData.main.temp_max.toFixed()}<WiFahrenheit /> L:{weatherData.main.temp_min.toFixed()}<WiFahrenheit /></h4>
                        <h4>Feels_like:{weatherData.main.feels_like.toFixed()}<WiFahrenheit /></h4>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="top">
                    <div className="Pressure">
                        <PressureChart pressure={pressure} ground_level={ground_level} sea_level={sea_level} />
                    </div>
                    <div className="Humidity">
                        <HumidityChart humidity={humidity} />
                    </div>
                </div>
                <div className="middle">
                    <p>{weatherData.weather[0].main}</p>
                </div>
                <div className="bottom">
                    <div className="wind">
                        <h3>WIND</h3>
                        <WiStrongWind size={30} />
                        <p>{weatherData.wind.speed.toFixed()}MPH</p>
                    </div>
                    <div className="sunset">
                        <h3>SUNSET</h3>
                        <WiSunset size={30} />
                        <p>{sunset}</p>
                    </div>
                    <div className="visibility">
                        <h3>VISIBILITY</h3>
                        <IoEyeOutline size={30} />
                        <p>{visibility.toFixed(2)}mi</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WeatherCard;


