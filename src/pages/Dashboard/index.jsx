import React from "react";
import { Container, Row } from "reactstrap";
import MiniWidget from "../../components/Common/mini-widget";
import Activity from "../../components/Common/Activity";

const series1 = [
  { name: "Reg. Societies", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] },
];
const options1 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#f1b44c"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
};

//Etherium Chart
const series2 = [
  { name: "Total Emp.", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
];
const options2 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#3452e1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
};

//LiteCoin Chart
const series3 = [
  { name: "Loan Dist.", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
];
const options3 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#50a5f1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
};

//Etherium Chart
const series4 = [
  { name: "GDP%", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
];
const options4 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#34c38f"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
};

const Dashboard = () => {
  const reports = [
    {
      title: "Total Registered Societies",
      icon: "mdi mdi-charity",
      color: "warning",
      value: "57,986",
      desc: "+ 0.0012 ( 0.2 % )",
      series: series1,
      options: options1,
      arrowUpDown: "mdi mdi-arrow-up text-success",
    },
    {
      title: "Total Employment",
      icon: "mdi mdi-account-group",
      color: "primary",
      value: "2,07,753",
      desc: "- 4.102 ( 0.1 % )",
      series: series2,
      options: options2,
      arrowUpDown: "mdi mdi-arrow-down text-danger",
    },
    {
      title: "Loans Disbursed",
      icon: "mdi mdi-account-cash-outline",
      color: "info",
      value: "₹99,22,235",
      desc: "+ 1.792 ( 0.1 % )",
      series: series3,
      options: options3,
      arrowUpDown: "mdi mdi-arrow-up text-success",
    },
    {
      title: "GDP Growth",
      icon: "mdi mdi-chart-line",
      color: "success",
      value: "7.2%",
      desc: "+ 1.792 ( 0.1 % )",
      series: series4,
      options: options4,
      arrowUpDown: "mdi mdi-arrow-up text-success",
    },
  ];

  //meta title
  document.title = "CRCS: Central Registrar for Cooperative Societies";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <MiniWidget reports={reports} />
          </Row>

          <Row>
            <Activity />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
