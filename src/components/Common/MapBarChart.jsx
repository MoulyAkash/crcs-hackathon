import React from "react";
import ReactApexChart from "react-apexcharts";

const MapBarChart = ({ dataSeries }) => {
  const series = [
    {
      data: dataSeries,
      name: "Co-op",
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#A4BE7B", "#5F8D4E", "#698269", "#609966", "#40513B"],
    legend: {
      show: false,
    },
    grid: {
      borderColor: "#dedede",
    },
    xaxis: {
      categories: [
        "Agriculture",
        "Finance",
        "Consumer Goods",
        "Housing",
        "Healthcare",
      ],
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height="100%"
    />
  );
};

export default MapBarChart;
