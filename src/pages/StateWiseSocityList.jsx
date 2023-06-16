// src/components/filter.
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import DatamapsIndia from "react-datamaps-india";

import { stateWiseList } from "../data/data";

//import components
import Breadcrumbs from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";

function StateWiseSocityList() {
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

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs
          title="Reg. Societies"
          breadcrumbItem="State Wise Socities"
        />
        {/* <Table columns={columns} data={data} /> */}
        <TableContainer
          columns={stateWiseTableColumns}
          data={stateWiseList}
          isGlobalFilter={true}
          isAddOptions={false}
          customPageSize={10}
          className="custom-header-css"
        />
      </div>
    </div>
  );
}

StateWiseSocityList.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default StateWiseSocityList;
