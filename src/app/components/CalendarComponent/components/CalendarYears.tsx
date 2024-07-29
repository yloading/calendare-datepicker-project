import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type CalendarYearTypes = {
  date: Date;
  setDate: (date: Date) => void;
  setType: (type: string) => void;
  getYearScope: () => { start: number; end: number };
  getYears: () => number[];
};
const CalendarYears = (props: CalendarYearTypes) => {
  const { date, getYearScope, getYears, setDate, setType } = props;

  return (
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
          <span>
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
              }}
              disabled={index === 0 || index === 11}
            >
              {year}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarYears;
