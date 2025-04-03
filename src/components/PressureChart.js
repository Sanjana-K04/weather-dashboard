import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
const PressureChart = ({ pressure, ground_level, sea_level }) => {
    const data = {
        labels: ["Pressure", "Ground_Level", "Sea_Level"],
        datasets: [{
            label: 'Pressure (hPa)',
            data: [pressure, ground_level, sea_level],
            backgroundColor: ["#89CFF0", "#87CEFA", "#A4DDED"],
            borderColor: ["#6495ED", "#6495ED", "#6495ED"],
            borderWidth: 1,
        },],
    };
    return (
        <div>
            <h3>Pressure Level</h3>
            <Bar key={JSON.stringify(data)} id="bar-chart" data={data} />
        </div>
    );

};

export default PressureChart;

