import React, { memo } from "react";
import NavBar from "../components/HeaderComponent/NavBar";
import Calendar from "../components/CalendarComponent/Calendar";

const CalendarPage = () => {
  return (
    <>
      <NavBar />
      <Calendar />
    </>
  );
};

export default memo(CalendarPage);
