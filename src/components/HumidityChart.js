import React from "react";
import { WiHumidity } from "react-icons/wi";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, plugins, Tooltip, ArcElement, Title, Legend } from "chart.js";

ChartJS.register(plugins, Tooltip, ArcElement, Title, Legend);
const HumidityChart = ({ humidity }) => {
    const data = {
        labels: ['Humidity',],
        datasets: [{
            label: 'HUMIDITY',
            data: [humidity, 100 - humidity],
            backgroundColor: ['#87CEEB', '#E8E8E8'],
            borderWidth: 1,
        }],
    };
    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.raw + '%';
                    },
                },
            },
        },
    };

    return (
        <div>
            <div className="title">
                <WiHumidity size={30} />
                <h3>Humidity</h3>
            </div>
            <Doughnut key={JSON.stringify(data)} id="doughnut-chart" data={data} options={options} />
        </div>
    );
};
export default HumidityChart;

