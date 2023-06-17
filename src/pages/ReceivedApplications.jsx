import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";
import { receivedApplications } from "../data/data";

const ReceivedApplications = () => {
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
        Header: "State Name",
        accessor: "stateName",
      },
      {
        Header: "District Name",
        accessor: "districtName",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Received",
        accessor: "received",
      },
      {
        Header: "Disposal Before",
        accessor: "disposalBefore",
      },
    ],
    []
  );

  const [data, setData] = useState(receivedApplications);

  //meta title
  document.title = "CRCS | ReceivedApplications";

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumb title="CRCS" breadcrumbItem="ReceivedApplications" />

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

export default ReceivedApplications;
