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
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: financialYearWiseList
                .map((item) => item.financialYear)
                .slice(1)
                .slice(-10),
            },
          },
          series: [
            {
              name: "societyNum",
              data: financialYearWiseList
                .map((item) => item.societyNum)
                .slice(1)
                .slice(-10),
            },
          ],
        });
      } else if (newWidth > 991) {
        setChartState({
          options: {
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: financialYearWiseList
                .map((item) => item.financialYear)
                .slice(1)
                .slice(-20),
            },
          },
          series: [
            {
              name: "societyNum",
              data: financialYearWiseList
                .map((item) => item.societyNum)
                .slice(1)
                .slice(-20),
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
        <Col lg={12} style={{ marginBottom: 20 }}>
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
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="mb-6">
                  Registered Societies vs Financial Year
                </CardTitle>
                <div className="text-center">
                  <div className="mb-4">
                    <i className="bx bx-map-pin text-primary display-4" />
                  </div>
                  <h3>1,456</h3>
                  <p>Societies Registered</p>
                </div>

                <div className="table-responsive mt-4">
                  <table className="table align-middle table-nowrap">
                    <tbody>
                      <tr>
                        <td style={{ width: "30%" }}>
                          <p className="mb-0">2020-21</p>
                        </td>
                        <td style={{ width: "25%" }}>
                          <h5 className="mb-0">104</h5>
                        </td>
                        <td>
                          <Progress
                            value="75"
                            color="primary"
                            className="bg-transparent progress-sm"
                            size="sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-0">2018-19</p>
                        </td>
                        <td>
                          <h5 className="mb-0">172</h5>
                        </td>
                        <td>
                          <Progress
                            value="97"
                            color="success"
                            className="bg-transparent progress-sm"
                            size="sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-0">2016-17</p>
                        </td>
                        <td>
                          <h5 className="mb-0">147</h5>
                        </td>
                        <td>
                          <Progress
                            value="90"
                            color="warning"
                            className="bg-transparent progress-sm"
                            size="sm"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
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
