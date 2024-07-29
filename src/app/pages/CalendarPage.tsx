import React, { memo, useState } from "react";
import NavBar from "../components/HeaderComponent/NavBar";
import Calendar from "../components/CalendarComponent/Calendar";
import { useDateInput } from "../hooks/useDateInput";

const CalendarPage = () => {
  const { handleDateOnClick, dateInput } = useDateInput();

  return (
    <>
      <NavBar />
      <Calendar handleOnDateClick={handleDateOnClick} dateInput={dateInput} />
    </>
  );
};

export default memo(CalendarPage);
