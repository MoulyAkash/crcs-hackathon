// src/components/filter.
import React, { useMemo, useState, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Progress,
} from "reactstrap";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

import { financialYearWiseList } from "../data/data";

//import components
import Breadcrumbs from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";

function FinancialYearWiseList() {
  const yearWiseTableColumns = useMemo(
    () => [
      {
        Header: "Year",
        accessor: "financialYear",
      },
      {
        Header: "No. of Societies",
        accessor: "societyNum",
      },
    ],
    []
  );

  const [chartState, setChartState] = useState();

  //meta title
  document.title =
    "Registered Societies | Central Registrar for Cooperative Societies (CRCS)";

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      if (newWidth < 992) {
        setChartState({
          options: {
            chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
            colors: ["#556ee6", "#34c38f"],
            dataLabels: { enabled: 0 },
            stroke: { width: [3, 3], curve: "straight" },
            grid: {
              row: { colors: ["transparent", "transparent"], opacity: 0.2 },
              borderColor: "#f1f1f1",
            },
            markers: { style: "inverted", size: 6 },
            xaxis: {
              categories: financialYearWiseList
                .map((item) => item.financialYear)
                .slice(1)
                .slice(-8),
              title: { text: "Financial Year" },
            },
            yaxis: { title: { text: "Registered Societies" } },
            legend: {
              position: "top",
              horizontalAlign: "right",
              floating: !0,
              offsetY: -25,
              offsetX: -5,
            },
            responsive: [
              {
                breakpoint: 600,
                options: {
                  chart: { toolbar: { show: !1 } },
                  legend: { show: !1 },
                },
              },
            ],
          },
          series: [
            {
              name: "Number Of Societies",
              data: financialYearWiseList
                .map((item) => item.societyNum)
                .slice(1)
                .slice(-8),
            },
          ],
        });
      } else if (newWidth > 991) {
        setChartState({
          options: {
            chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
            colors: ["#556ee6", "#34c38f"],
            dataLabels: { enabled: 0 },
            stroke: { width: [3, 3], curve: "straight" },
            grid: {
              row: { colors: ["transparent", "transparent"], opacity: 0.2 },
              borderColor: "#f1f1f1",
            },
            markers: { style: "inverted", size: 6 },
            xaxis: {
              categories: financialYearWiseList
                .map((item) => item.financialYear)
                .slice(1)
                .slice(-18),
              title: { text: "Financial Year" },
            },
            yaxis: { title: { text: "Registered Societies" } },
            legend: {
              position: "top",
              horizontalAlign: "right",
              floating: !0,
              offsetY: -25,
              offsetX: -5,
            },
            responsive: [
              {
                breakpoint: 600,
                options: {
                  chart: { toolbar: { show: !1 } },
                  legend: { show: !1 },
                },
              },
            ],
          },
          series: [
            {
              name: "Number of Societies",
              data: financialYearWiseList
                .map((item) => item.societyNum)
                .slice(1)
                .slice(-18),
            },
          ],
        });
      }
    };

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="page-content">
      <Container fluid style={{ maxWidth: 1500 }}>
        <Breadcrumbs
          title="Registered Societies"
          breadcrumbItem="Financial Year-wise List"
        />
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col lg={6}>
            <div id="line-chart" dir="ltr">
              {chartState && (
                <ReactApexChart
                  series={chartState.series}
                  options={chartState.options}
                  type="line"
                  height={320}
                  className="apex-charts"
                />
              )}
            </div>
          </Col>
          <Col lg={6}>
            <TableContainer
              columns={yearWiseTableColumns}
              data={financialYearWiseList}
              isGlobalFilter={true}
              customPageSize={10}
              className="custom-header-css"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
FinancialYearWiseList.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default FinancialYearWiseList;
