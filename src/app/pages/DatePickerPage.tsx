import React, { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const DatePickerPage = () => {
  return (
    <>
      <Header />
      This is DatePickerPage
    </>
  );
};

export default memo(DatePickerPage);
