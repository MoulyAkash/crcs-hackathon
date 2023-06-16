import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const colors = {
  warning: "#f1b44c",
  info: "#50a5f1",
  primary: "#556ee6",
  success: "#34c38f",
};

const MiniWidget = (props) => {
  return (
    <React.Fragment>
      {props.reports.map((report, key) => (
        <Col sm="3" key={key}>
          <Card
            style={{
              borderBottom: `2px solid`,
              borderColor: colors[report.color],
            }}
          >
            <CardBody>
              <div
                className="text-muted mb-4"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{report.title}</span>
                <div
                  style={{
                    background: `${colors[report.color]}26`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    padding: "5px 7px",
                  }}
                >
                  <i
                    className={
                      report.icon +
                      " h4 text-" +
                      report.color +
                      " align-middle mb-0"
                    }
                  />
                </div>
              </div>

              <Row>
                <Col xs="6">
                  <div>
                    <h4 style={{ fontWeight: "bolder" }}>{report.value}</h4>
                    <p
                      className="text-truncate mb-0"
                      style={{
                        color: colors[report.color],
                        fontWeight: 600,
                      }}
                    >
                      <i className={report.arrowUpDown} /> {report.desc}
                    </p>
                  </div>
                </Col>
                <Col xs="6">
                  <div>
                    <ReactApexChart
                      options={report.options}
                      series={report.series}
                      type="area"
                      height={60}
                      className="apex-charts"
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <span
                    style={{
                      background: "#eff2f7",
                      width: "max-content",
                      padding: "3px 6px",
                      borderRadius: "4px",
                      fontSize: "10px",
                    }}
                    className="text-muted mb-0"
                  >
                    Since last month
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default MiniWidget;

MiniWidget.propTypes = {
  reports: PropTypes.array,
};
