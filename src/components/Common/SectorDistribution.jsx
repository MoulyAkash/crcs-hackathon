import React from "react";
import ReactEcharts from "echarts-for-react";

const data = {
  totalRegisteredSocieties: 5000,
  sectorDistribution: {
    Agriculture: 2000,
    Housing: 300,
    Healthcare: 200,
    Finance: 1000,
    "Consumer Goods": 1500,
  },
};

const SectorDistribution = () => {
  const options = {
    toolbox: {
      show: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "top",
      data: Object.keys(data.sectorDistribution),
      textStyle: {
        color: ["#74788d"],
      },
    },
    color: ["#02a499", "#f8b425", "#ec4561", "#38a4f8", "#3c4ccf"],
    series: [
      {
        name: "Total Co-ops",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: Object.keys(data.sectorDistribution).map((item) => ({
          value: data.sectorDistribution[item],
          name: item,
        })),
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return <ReactEcharts style={{ height: "350px" }} option={options} />;
};
export default SectorDistribution;
