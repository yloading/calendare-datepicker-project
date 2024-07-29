import React, { memo, useState, useEffect } from "react";
import NavBar from "../components/HeaderComponent/NavBar";
import Calendar from "../components/CalendarComponent/Calendar";
import { useDateInput } from "../hooks/useDateInput";

const DatePickerPage = () => {
  const { handleDateOnClick, dateInput } = useDateInput();

  return (
    <>
      <NavBar />
      <Calendar
        handleOnDateClick={handleDateOnClick}
        dateInput={dateInput}
        datePicker
      />
    </>
  );
};

export default memo(DatePickerPage);
