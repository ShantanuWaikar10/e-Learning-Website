import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = ({ views = [] }) => {
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: views,
        borderColor: 'rgba(107,70,193,0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export const DoughnutChart = ({ users = [] }) => {
  const data = {
    labels: ['Subscribed', 'Not Subscribed'],
    datasets: [
      {
        label: 'Views',
        data: users,
        borderColor: ['rgb(62,12,171)', 'rgb(214,43,129)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getLastYearMonths() {
    var currentMonth = new Date().getMonth(); // get the current month
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var futureMonths = months.slice(currentMonth + 1); // get the months starting from next month
    return futureMonths.concat(months.slice(0, currentMonth + 1)); // concatenate the current month and the future months
  }
