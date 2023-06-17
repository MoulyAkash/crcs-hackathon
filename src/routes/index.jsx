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
import AllRegSocieties from "../pages/AllRegSocieties";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/registration", component: Registration },
  { path: "/home", component: Home },
  { path: "/state-wise-society-list", component: StateWiseSocietyList },
  { path: "/all-reg-crcs", component: AllRegSocieties },

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
