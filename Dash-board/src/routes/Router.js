import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import About from "../pages/About";
import Login from "../pages/Login";
import Details from "../pages/Details";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" element={<Login />} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users-admin" element={<Bookings />} />
      <Route path="/benefactor-admin" element={<SellCar />} />
      <Route path="/settings-admin" element={<Settings />} />
      <Route path="/about-admin" element={<About />} />
      <Route path="/details/:formId" element={<Details />} />
    </Routes>
  );
};

export default Router;
