import React, { memo } from "react";
import { useCalendar } from "./hooks/useCalendar";
import { DAYS_OF_THE_WEEK, MONTH_NAMES } from "./constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../helpers/globalHelpers";
import CalendarDates from "./components/CalendarDates";
import CalendarMonths from "./components/CalendarMonths";
import CalendarYears from "./components/CalendarYears";

type CalendarPropTypes = {
  handleOnDateClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  dateInput: string;
  datePicker?: boolean;
};

const Calendar = (props: CalendarPropTypes) => {
  const { handleOnDateClick, dateInput = "", datePicker = false } = props;

  const {
    deriveDates,
    setDate,
    type,
    setType,
    show,
    setShow,
    getYearScope,
    getYears,
    date,
  } = useCalendar(datePicker, dateInput);

  return (
    <>
      {datePicker && (
        <div className="text-center">
          <input
            type="text"
            value={formatDate(dateInput)}
            placeholder="YYYY-MM-DD"
            className="border px-3 py-1"
            onClick={() => setShow(true)}
            readOnly
          />
        </div>
      )}
      {show && (
        <div className="flex justify-center pt-1">
          {type === "dates" && (
            <CalendarDates
              datePicker={datePicker}
              date={date}
              setDate={setDate}
              setType={setType}
              deriveDates={deriveDates}
              handleOnDateClick={handleOnDateClick}
              dateInput={dateInput}
            />
          )}
          {type === "months" && (
            <CalendarMonths date={date} setDate={setDate} setType={setType} />
          )}
          {type === "years" && (
            <CalendarYears
              getYearScope={getYearScope}
              getYears={getYears}
              date={date}
              setDate={setDate}
              setType={setType}
            />
          )}
        </div>
      )}
    </>
  );
};

export default memo(Calendar);
