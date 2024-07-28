import * as React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import CalendarPage from "../pages/CalendarPage";
import DatePickerPage from "../pages/DatePickerPage";

function AppRoutes() {
  const routes = (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
      <Route path="date-picker" element={<DatePickerPage />} />
    </Routes>
  );

  return routes;
}

export default AppRoutes;
