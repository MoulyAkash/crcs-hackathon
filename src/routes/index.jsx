import React from "react";
import { Redirect } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import StateWiseSocietyList from "../pages/StateWiseSocietyList";
import CalendarWiseList from "../pages/CalendarWiseList";
import FinancialYearWiseList from "../pages/FinancialYearWiseList";
import Forms from "../pages/Forms/index";
import MSCS from "../pages/MSCSAct";
import AllRegSocieties from "../pages/AllRegSocieties";
import AnnualReturnsOffline from "../pages/AnnualReturnsOffline";
import Bank from "../pages/Bank";
import RegisteredUsers from "../pages/RegisteredUsers";
import ReceivedApplications from "../pages/ReceivedApplications";
import StatusOfApplication from "../pages/StatusOfApplication";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/registration", component: Registration },
  { path: "/home", component: Home },
  { path: "/state-wise-society-list", component: StateWiseSocietyList },
  { path: "/calendar-wise-list", component: CalendarWiseList },
  { path: "/financial-year-wise-list", component: FinancialYearWiseList },
  { path: "/forms/:id", component: Forms },
  { path: "/mscs/:id", component: MSCS },
  { path: "/all-reg-crcs", component: AllRegSocieties },
  { path: "/filled-ar-offline", component: AnnualReturnsOffline },
  { path: "/bank", component: Bank },
  { path: "/registered-users", component: RegisteredUsers },
  { path: "/received-applications", component: ReceivedApplications },
  { path: "/status-of-application", component: StatusOfApplication },


  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
];

export { publicRoutes, authProtectedRoutes };
