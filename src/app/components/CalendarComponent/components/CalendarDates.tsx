import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { DAYS_OF_THE_WEEK, MONTH_NAMES } from "../constants/constants";
import { DerivedDatesType } from "../../../types/CalendarTypes";

type CalendarDateTypes = {
  datePicker: boolean;
  date: Date;
  setDate: (date: Date) => void;
  setType: (type: string) => void;
  deriveDates: () => any;
  handleOnDateClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  dateInput: string;
};
const CalendarDates = (props: CalendarDateTypes) => {
  const {
    date,
    datePicker,
    setDate,
    setType,
    deriveDates,
    handleOnDateClick,
    dateInput,
  } = props;

  return (
    <div
      className={`border p-5 bg-white ${
        datePicker &&
        "before:h-0 before:content-[' '] before:absolute before:border-x-8 before:border-x-transparent before:border-b-8 before:border-b-gray before:top-[5.9rem] before:left-[27rem] before:ml-6"
      }"`}
    >
      <div className="px-4 mb-3">
        <div className="text-center font-semibold">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="float-left mt-1.5 text-[12px] cursor-pointer"
            onClick={() => {
              const prevDate = date.setMonth(date.getMonth() - 1);
              setDate(new Date(prevDate));
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
          deriveDates().map((date: DerivedDatesType, index: number) => (
            <div className="w-10 h-10 grid place-content-center" key={index}>
              <button
                data-object={JSON.stringify(date)}
                className={`${
                  date.isCurrent
                    ? "cursor-pointer hover:text-white hover:bg-main-color rounded-full w-10 h-10 hover:transition-all grid place-content-center"
                    : "text-gray-300 cursor-not-allowed"
                } ${date.isDateToday && "text-main-color"} ${
                  dateInput &&
                  dateInput === date.value.toISOString() &&
                  "text-white bg-main-color rounded-full w-10 h-10 grid place-content-center"
                }`}
                onClick={handleOnDateClick}
                disabled={!date.isCurrent}
              >
                {date.value.getDate()}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CalendarDates;
