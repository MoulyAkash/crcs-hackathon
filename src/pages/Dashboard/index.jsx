import React from "react"
import {
  Container,
} from "reactstrap"

const Dashboard = () => {
  //meta title
  document.title="Forget Password | Skote - Vite React Admin & Dashboard Template";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Dashboard</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default Dashboard;
