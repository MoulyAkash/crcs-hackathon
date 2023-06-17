import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";
import { statusOfApplication } from "../data/data";

const StatusOfApplication = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S No",
        accessor: "id",
      },
      {
        Header: "Society Name",
        accessor: "societyName",
      },
      {
        Header: "Proposal Type",
        accessor: "proposalType",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "District",
        accessor: "district",
      },
      {
        Header: "Application Date",
        accessor: "applicationDate",
      },
      {
        Header: "Notice",
        accessor: "notice",
      },
      {
        Header: "Order",
        accessor: "order",
      },
      {
        Header: "Certificate",
        accessor: "certificate",
      },
    ],
    []
  );

  const [data, setData] = useState(statusOfApplication);

  //meta title
  document.title = "CRCS | StatusOfApplication";

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumb title="CRCS" breadcrumbItem="StatusOfApplication" />

        <TableContainer
          columns={columns}
          data={data}
          isGlobalFilter={true}
          isAddOptions={false}
          customPageSize={10}
          className="table-striped"
        />
      </div>
    </div>
  );
};

export default StatusOfApplication;
