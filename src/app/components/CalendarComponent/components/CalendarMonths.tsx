import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { MONTH_NAMES } from "../constants/constants";

type CalendarMonthsTypes = {
  date: Date;
  setDate: (date: Date) => void;
  setType: (type: string) => void;
};
const CalendarMonths = (props: CalendarMonthsTypes) => {
  const { date, setDate, setType } = props;

  return (
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
              }}
            >
              {month}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMonths;
