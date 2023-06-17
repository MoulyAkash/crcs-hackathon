// src/components/filter.
import React, { useMemo, useState } from "react";
import { Card, Col, Container, Row, CardBody, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
import DatamapsIndia from "react-datamaps-india";
import { Tooltip } from "react-tooltip";

import { stateWiseList } from "../data/data";

//import components
import Breadcrumbs from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";
import MapChart from "../components/CustomComponents/MapChart";

function StateWiseSocietyList() {
  const stateWiseTableColumns = useMemo(
    () => [
      {
        Header: "State / UT Name",
        accessor: "state",
      },
      {
        Header: "No. of Societies",
        accessor: "societyNum",
      },
    ],
    []
  );

  //meta title
  document.title =
    "Registered Societies | Central Registrar for Cooperative Societies (CRCS)";

  const [content, setContent] = useState("");

  return (
    <div className="page-content">
      <Container fluid style={{ maxWidth: 1500 }}>
        <Breadcrumbs title="Registered Societies" breadcrumbItem="State-wise List" />
        <Row>
          <Col lg={6}>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MapChart setTooltipContent={setContent} />
              <Tooltip id="my-tooltip" />
              {/* <DatamapsIndia
                regionData={stateWiseRegionData}
                hoverComponent={({ value }) => {
                  return (
                    <div>
                      {value.name} {value.value}
                    </div>
                  );
                }}
                mapLayout={{
                  startColor: "#c6c9ff",
                  endColor: "#626ed4",
                  hoverTitle: "Count",
                  noDataColor: "#f5f5f5",
                  borderColor: "#ffffff",
                  hoverColor: "#626ed4",
                  hoverBorderColor: "#626ed4",
                  // height: 10,
                  // weight: 30,
                }}
              /> */}
            </div>
          </Col>
          <Col lg={6}>
            <TableContainer
              columns={stateWiseTableColumns}
              data={stateWiseList}
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
StateWiseSocietyList.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default StateWiseSocietyList;
