import React, { memo, useState } from "react";
import { useCalendar } from "./hooks/useCalendar";
import { DAYS_OF_THE_WEEK, MONTH_NAMES } from "./constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  const { deriveDates, date, setDate, setNextPrevCounter, type, setType } =
    useCalendar();

  const getYearScope = (currentYear: number = date.getFullYear()) => {
    const lastNumber = +currentYear
      .toString()
      .charAt(currentYear.toString().length - 1);

    const afterYears: number = currentYear + (9 - lastNumber);
    const previousYears = afterYears - 9;

    return { start: previousYears, end: afterYears };
  };

  const getYears = () => {
    const yearsArray: number[] = [];

    for (let i = getYearScope().start - 1; i <= getYearScope().end + 1; i++) {
      yearsArray.push(i);
    }

    return yearsArray;
  };

  return (
    <div className="flex justify-center pt-28">
      {type === "dates" && (
        <div className="border p-5">
          <div className="px-4 mb-3">
            <div className="text-center font-semibold">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="float-left mt-1.5 text-[12px] cursor-pointer"
                onClick={() => {
                  const prevDate = date.setMonth(date.getMonth() - 1);
                  setDate(new Date(prevDate));
                  setNextPrevCounter((prev) => prev - 1);
                }}
              />{" "}
              <span
                className="cursor-pointer hover:bg-gray-200 transition-all hover:px-7 hover:py-1"
                onClick={() => setType("months")}
              >
                {MONTH_NAMES[date.getMonth()]} {date.getFullYear()}
              </span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="float-right mt-1.5 text-[12px] cursor-pointer"
                onClick={() => {
                  const nextDate = date.setMonth(date.getMonth() + 1);
                  setDate(new Date(nextDate));
                  setNextPrevCounter((prev) => prev + 1);
                }}
              />{" "}
            </div>
          </div>
          <div className="grid grid-cols-7">
            {DAYS_OF_THE_WEEK.map((day, index) => (
              <div className="w-12 h-12 grid place-content-center" key={index}>
                <h1 className="font-semibold">{day}</h1>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {deriveDates().length > 0 &&
              deriveDates().map((date, index) => (
                <div
                  className="w-12 h-12 grid place-content-center"
                  key={index}
                >
                  <h1
                    className={`${
                      date.isCurrent
                        ? "cursor-pointer hover:text-white hover:bg-red-400 rounded-full w-10 h-10 hover:transition-all grid place-content-center"
                        : "text-gray-300 cursor-not-allowed"
                    } ${date.isDateToday && "text-red-400"}`}
                  >
                    {date.value.getDate()}
                  </h1>
                </div>
              ))}
          </div>
        </div>
      )}
      {type === "months" && (
        <div className="border p-5">
          <div className="px-4 mb-3">
            <div className="text-center font-semibold">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="float-left mt-1.5 text-[12px] cursor-pointer"
                onClick={() => {
                  const prevYear = date.setFullYear(date.getFullYear() - 1);
                  setDate(new Date(prevYear));
                }}
              />{" "}
              <span
                className="cursor-pointer hover:bg-gray-200 transition-all hover:px-7 hover:py-1"
                onClick={() => setType("years")}
              >
                {date.getFullYear()}
              </span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="float-right mt-1.5 text-[12px] cursor-pointer"
                onClick={() => {
                  const nextDate = date.setFullYear(date.getFullYear() + 1);
                  setDate(new Date(nextDate));
                }}
              />{" "}
            </div>
          </div>
          <div className="grid grid-cols-4">
            {MONTH_NAMES.map((month, index) => (
              <div
                className="w-20 grid place-content-center cursor-pointer"
                key={index}
              >
                <button
                  value={index}
                  className={`p-8 text-[12px] ${
                    date.getMonth() === index
                      ? "text-white rounded-full w-10 h-10 bg-red-500 grid place-content-center"
                      : ""
                  }`}
                  onClick={(e: any) => {
                    const newDate = date.setMonth(e.target.value);
                    setDate(new Date(newDate));
                    setType("dates");
                    setNextPrevCounter((prev) => prev + 1);
                  }}
                >
                  {month}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {type === "years" && (
        <div className="border p-5">
          <div className="px-4 mb-3">
            <div className="text-center font-semibold">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="float-left mt-1.5 text-[12px] cursor-pointer"
                onClick={() => {
                  const prevYear = date.setFullYear(getYearScope().start - 1);
                  setDate(new Date(prevYear));
                }}
              />{" "}
              <span
                className="cursor-pointer hover:bg-gray-200 transition-all hover:px-7 hover:py-1"
                onClick={() => setType("months")}
              >
                {getYearScope().start}-{getYearScope().end}
              </span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="float-right mt-1.5 text-[12px] cursor-pointer"
                onClick={() => {
                  const nextDate = date.setFullYear(getYearScope().end + 1);
                  setDate(new Date(nextDate));
                }}
              />{" "}
            </div>
          </div>
          <div className="grid grid-cols-4">
            {getYears().map((year, index) => (
              <div
                className="w-20 grid place-content-center cursor-pointer"
                key={index}
              >
                <button
                  value={year}
                  className={`p-8 text-[12px] ${
                    date.getFullYear() === year
                      ? "text-white rounded-full w-10 h-10 bg-red-500 grid place-content-center"
                      : ""
                  } ${
                    (index === 0 || index === 11) &&
                    "text-gray-300 cursor-not-allowed"
                  }`}
                  onClick={(e: any) => {
                    const newDate = date.setFullYear(e.target.value);
                    setDate(new Date(newDate));
                    setType("months");
                    setNextPrevCounter((prev) => prev + 1);
                  }}
                  disabled={index === 0 || index === 11}
                >
                  {year}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Calendar);
