import React, { useMemo } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";
import { annularReportOffline } from "../data/data";

const AnnualReturnsOffline = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S No",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Reg No",
        accessor: "regNo",
      },
      {
        Header: "State/UT",
        accessor: "state",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Received On",
        accessor: "receivedOn",
      },
    ],
    []
  );

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumb
          title="Reports"
          breadcrumbItem="List of Annual Returns Received by Offline  : 1319"
        />

        <TableContainer
          columns={columns}
          data={annularReportOffline}
          isGlobalFilter={true}
          isAddOptions={false}
          customPageSize={10}
          className="table-striped"
        />
      </div>
    </div>
  );
};

export default AnnualReturnsOffline;
