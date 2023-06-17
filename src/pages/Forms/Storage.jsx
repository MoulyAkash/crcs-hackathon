import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const Storage = (props) => {
  const { data, onClick } = props;
  return (
    <React.Fragment>
      <Card className="filemanager-sidebar ms-lg-2">
        <CardBody>
          <div className="text-center">
            <h5 className="font-size-15 mb-4">Forms</h5>
          </div>

          {data.map((item, index) => (
            <div key={index} className="mt-4" onClick={() => onClick(item)}>
              <div className="card border shadow-none mb-2">
                <Link to="#" className="text-body">
                  <div className="p-2">
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <div className="avatar-xs align-self-center me-2">
                        <div className="avatar-title rounded bg-transparent text-danger font-size-20">
                          <i className="mdi mdi-file-pdf"></i>
                        </div>
                      </div>
                      <div
                        className="overflow-hidden me-auto"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <h5 className="font-size-13 text-truncate mb-1">
                          {item.formName}
                        </h5>
                      </div>
                      {item.formSize}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

Storage.propTypes = {
  options: PropTypes.any,
  series: PropTypes.any,
};

export default Storage;
