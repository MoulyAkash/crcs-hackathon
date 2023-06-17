import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import TableContainer from "../components/Common/TableContainer";
import { registeredUsers } from "../data/data";

const RegisteredUsers = () => {
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
        Header: "State",
        accessor: "state",
      },
      {
        Header: "District",
        accessor: "district",
      },
      {
        Header: "Society Type",
        accessor: "societyType",
      },
      {
        Header: "User Reg. Date",
        accessor: "registrationDate",
      },
    ],
    []
  );

  const [data, setData] = useState(registeredUsers);

  //meta title
  document.title = "CRCS | Registered Users";

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumb title="CRCS" breadcrumbItem="Registered Users" />

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

export default RegisteredUsers;
