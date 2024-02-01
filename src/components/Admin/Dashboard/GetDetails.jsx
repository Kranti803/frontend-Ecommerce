import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GetDetails = () => {
  return (
    <section className="bg-[#ffff] rounded-md px-4 py-2 min-h-screen">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        Dashboard
      </h2>
      <div className="">
        <aside className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-16">
          <div className="w-full md:w-[50%] h-28 text-md font-semibold bg-[#e05607cf] text-white rounded-sm shadow-md flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Products</p>
            <p className="tracking-wider">105</p>
          </div>
          <div className="w-full text-md  font-semibold md:w-[50%] h-28 rounded-sm shadow-md bg-[#1bb91bc8] text-white flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Revenue</p>
            <p className="tracking-wider">$4412</p>
          </div>
          <div className="w-full text-md  font-semibold md:w-[50%] h-28 rounded-sm shadow-md bg-[#d69d0db7] text-white flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Users</p>
            <p className="tracking-wider">100</p>
          </div>
          <div className="w-full text-md  font-semibold md:w-[50%] h-28 rounded-sm shadow-md bg-[#0e7fb3b9] text-white flex flex-col justify-evenly items-center">
            <p className="tracking-wider">Total Orders</p>
            <p className="tracking-wider">500</p>
          </div>
        </aside>
      </div>
      <DoughnutChart />
      <LineChart />
      <BarChart />
    </section>
  );
};
export default GetDetails;

// Doughnut chart component
const DoughnutChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: " Total Stocks",
      },
    },
  };

  const chartData = {
    labels: ["Stock", "Out Of Stock"],
    datasets: [
      {
        data: [30, 10],
        backgroundColor: ["#1bb91bc8", "#f92626b7"],
      },
    ],
  };
  return (
    <div className="my-12 w- md:w-1/2 m-auto ">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

//line chart component
const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Revenue",
      },
    },
  };

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Revenue Per Month",
        data: [
          1000, 2000, 3000, 4000, 3000, 400, 2000, 2000, 100, 3000, 1000, 200,
        ],
        borderColor: "#1bb91bc8",
        fill: false,
      },
    ],
  };
  return (
    <div className="my-12 w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

//Bar Chart component

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Orders",
      },
    },
  };
  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Number of Orders",
        data: [
          1000, 2000, 3000, 4000, 3000, 400, 2000, 2000, 100, 3000, 1000, 200,
        ],
        backgroundColor: "#0e7fb3b9",
        fill: true,
      },
    ],
  };
  return (
    <div className="my-12 w-full h-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};
