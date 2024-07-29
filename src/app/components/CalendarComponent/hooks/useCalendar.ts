import { useEffect, useState } from "react";
import { DerivedDatesType } from "../../../types/CalendarTypes";
import { formatDate } from "../../../helpers/globalHelpers";

export const useCalendar = (datePicker: boolean, dateInput: any) => {
  const newDate: Date = new Date();

  const [date, setDate] = useState(newDate);

  const firstDateOfTheMonth: Date = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  );
  const lastDateOfTheMonth: Date = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  );

  const [type, setType] = useState("dates");
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (datePicker) {
      setShow(false);
    }
  }, [dateInput]);

  useEffect(() => {
    storeCurrentDateToSessionStorage();
  }, []);

  const storeCurrentDateToSessionStorage = () => {
    sessionStorage.clear();
    const today = new Date();
    sessionStorage.setItem("today", today.toISOString());
  };

  const getTodaysDate = (date: string) => {
    const today = sessionStorage.getItem("today");
    if (today) {
      const todayFormatted = formatDate(today);
      const dateFormatted = formatDate(date);

      return todayFormatted === dateFormatted;
    }
    return false;
  };

  const getFullDate = (day: number) =>
    new Date(date.getFullYear(), date.getMonth(), day);

  const deriveDates = () => {
    const datesArray: DerivedDatesType[] = [];

    // push dates to array before the first date of the month
    for (let i = 1; i <= firstDateOfTheMonth.getDay(); i++) {
      datesArray.push({
        isDateToday: false,
        isCurrent: false,
        value: getFullDate(i - firstDateOfTheMonth.getDay()),
      });
    }

    // push dates to array from first to last date of the month
    for (
      let i: number = firstDateOfTheMonth.getDate();
      i <= lastDateOfTheMonth.getDate();
      i++
    ) {
      datesArray.push({
        isDateToday: getTodaysDate(getFullDate(i).toISOString()),
        isCurrent: true,
        value: getFullDate(i),
      });
    }

    // get and push the last dates after the last day of the month
    // given there are 7 days a week and 6 rows, concluded 7 * 6 = 42 overall
    const lastDatesCount = 42 - datesArray.length;

    for (
      let i = lastDateOfTheMonth.getDate() + 1;
      i <= lastDateOfTheMonth.getDate() + lastDatesCount;
      i++
    ) {
      datesArray.push({
        isDateToday: false,
        isCurrent: false,
        value: getFullDate(i),
      });
    }

    return datesArray;
  };

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

  return {
    deriveDates,
    date,
    setDate,
    type,
    setType,
    show,
    setShow,
    getYearScope,
    getYears,
  };
};
