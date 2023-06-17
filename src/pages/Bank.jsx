import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";
import { banks } from "../data/data";

const Bank = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S No",
        accessor: "id",
      },
      {
        Header: "Name of the Bank",
        accessor: "bankName",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "State Name",
        accessor: "stateName",
      },
      {
        Header: "District Name",
        accessor: "districtName",
      },
    ],
    []
  );

  const [data, setData] = useState(banks);

  //meta title
  document.title = "CRCS | Bank";

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumb
          title="CRCS"
          breadcrumbItem="Bank"
        />

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

export default Bank;
