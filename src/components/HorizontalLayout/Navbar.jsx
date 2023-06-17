import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";

const Navbar = (props) => {
  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [crypto, setcrypto] = useState(false);
  const [project, setproject] = useState(false);
  const [task, settask] = useState(false);
  const [contact, setcontact] = useState(false);
  const [blog, setBlog] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                {/* Home */}
                <li className="nav-item">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/dashboard"
                  >
                    {props.t("Home")} {props.menuOpen}
                  </Link>
                </li>

                {/* Chart */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                    
                    {props.t("Charts")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="/#" className="dropdown-item">
                      {props.t("State Wise")}
                    </Link>
                    <Link to="/#" className="dropdown-item">
                      {props.t("Year Wise")}
                    </Link>
                    <Link to="/#" className="dropdown-item">
                      {props.t("Type Wise")}
                    </Link>
                  </div>
                </li> */}

                {/* Reg. Societies */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    to="/dashboard"
                  >
                    {props.t("Reg. Societies")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: ui })}>
                    <Link
                      to="/state-wise-society-list"
                      className="dropdown-item"
                    >
                      {props.t("State-wise List")}
                    </Link>
                    <Link to="/all-reg-crcs" className="dropdown-item">
                      {props.t("All Reg. Societies")}
                    </Link>
                    <Link to="/calendar-wise-list" className="dropdown-item">
                      {props.t("Calender Year-wise List")}
                    </Link>
                    <Link to="/financial-year-wise-list" className="dropdown-item">
                      {props.t("Financial Year-wise List")}
                    </Link>
                  </div>
                </li>

                {/* Forms */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    to="/forms/1"
                  >
                    {props.t("Forms")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <Link to="/forms/1" className="dropdown-item">
                      {props.t("Form I")}
                    </Link>
                    <Link to="/forms/2" className="dropdown-item">
                      {props.t("Form II")}
                    </Link>
                    <Link to="/forms/3" className="dropdown-item">
                      {props.t("Form III")}
                    </Link>
                    <Link to="/forms/4" className="dropdown-item">
                      {props.t("Form IV")}
                    </Link>
                    <Link to="/forms/5" className="dropdown-item">
                      {props.t("Form V")}
                    </Link>
                  </div>
                </li>

                {/* MSCS Act */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setemail(!email);
                    }}
                    to="/mscs/1"
                  >
                    {props.t("MSCS Act")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: email })}>
                    <Link to="/mscs/1" className="dropdown-item">
                      {props.t("MSCS Act,2002")}
                    </Link>
                    <Link to="/mscs/2" className="dropdown-item">
                      {props.t("MSCS Rules,2002")}
                    </Link>
                    <Link to="/mscs/3" className="dropdown-item">
                      {props.t("Model Bye-laws")}
                    </Link>
                    <Link to="/mscs/4" className="dropdown-item">
                      {props.t("National Policy on Cooperative 2002")}
                    </Link>
                  </div>
                </li>

                {/* Application */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setecommerce(!ecommerce);
                    }}
                    to="/dashboard"
                  >
                    {props.t("Application")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: ecommerce })}
                  >
                    <Link to="/received-applications" className="dropdown-item">
                      {props.t("Received Application")}
                    </Link>
                    <Link to="/status-of-application" className="dropdown-item">
                      {props.t("Status of Application")}
                    </Link>
                  </div>
                </li>

                {/* MSCS-MIS */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setcrypto(!crypto);
                    }}
                    to="/dashboard"
                  >
                    {props.t("MSCS-MIS")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: crypto })}>
                    <Link to="/registration" className="dropdown-item">
                      {props.t("New User Registration")}
                    </Link>
                    <Link to="/login" className="dropdown-item">
                      {props.t("User Login")}
                    </Link>
                    <Link to="/login" className="dropdown-item">
                      {props.t("Admin User")}
                    </Link>
                  </div>
                </li>

                {/* Reports */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setproject(!project);
                    }}
                    to="/dashboard"
                  >
                    {props.t("Reports")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: project })}
                  >
                    <Link to="/all-reg-crcs" className="dropdown-item">
                      {props.t("All Reg Societies ")}
                    </Link>
                    <Link to="/registered-users" className="dropdown-item">
                      {props.t("Registered Users")}
                    </Link>
                    <Link to="/filled-ar-offline" className="dropdown-item">
                      {props.t("Filed Annual Returns Online")}
                    </Link>
                  </div>
                </li>

                {/* Liquidation */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      settask(!task);
                    }}
                    to="/dashboard"
                  >
                    
                    {props.t("Liquidation")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: task })}>
                    <Link to="/#" className="dropdown-item">
                      {props.t("Societies under Liquidation")}
                    </Link>
                    <Link to="/#" className="dropdown-item">
                      {props.t("Liquidation Process Initiated")}
                    </Link>
                  </div>
                </li> */}

                {/* Bank */}
                <li className="nav-item">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/bank"
                  >
                    {props.t("Bank")} {props.menuOpen}
                  </Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);
