import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";
import { registeredSocieties } from "../data/data";

const AllRegSocieties = () => {
  const columns = useMemo(
    () => [
      {
        Header: "S No",
        accessor: "id",
      },
      {
        Header: "Name of the Cooperative and its address",
        accessor: "societyName",
      },
      {
        Header: "Area of operation",
        accessor: "operationArea",
      },
      {
        Header: "Principal place",
        accessor: "state",
      },
      {
        Header: "Date of Registration",
        accessor: "registrationDate",
      },
      {
        Header: "Type",
        accessor: "sectorType",
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      registeredSocieties.map((item) => ({
        ...item,
        societyName: `${item.societyName}.\n ${item.address}`,
      }))
    );
  }, []);

  //meta title
  document.title = "CRCS | All Reg. Societies";

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumb
          title="Reg. Societies"
          breadcrumbItem="All Reg. Societies"
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

export default AllRegSocieties;
