import { useEffect, useState } from "react";
import { DerivedDatesType } from "../../../types/CalendarTypes";

export const useCalendar = () => {
  const [type, setType] = useState("dates");

  const newDate: Date = new Date();
  // const [currentDay, setCurrentDay] = useState(new Date());

  const [date, setDate] = useState(newDate);
  const [nextPrevCounter, setNextPrevCounter] = useState(0);

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

  const getDate = (day: number) =>
    new Date(date.getFullYear(), date.getMonth(), day);

  const deriveDates = () => {
    const datesArray: DerivedDatesType[] = [];

    // push dates to array before the first date of the month
    for (let i = 1; i <= firstDateOfTheMonth.getDay(); i++) {
      datesArray.push({
        isDateToday: false,
        isCurrent: false,
        value: getDate(i - firstDateOfTheMonth.getDay()),
      });
    }

    // push dates to array from first to last date of the month
    for (
      let i: number = firstDateOfTheMonth.getDate();
      i <= lastDateOfTheMonth.getDate();
      i++
    ) {
      const compareTodayDate =
        nextPrevCounter === 0 && getDate(i).getDate() === date.getDate();
      datesArray.push({
        isDateToday: compareTodayDate,
        isCurrent: true,
        value: getDate(i),
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
        value: getDate(i),
      });
    }

    return datesArray;
  };

  return {
    deriveDates,
    date,
    setDate,
    setNextPrevCounter,
    type,
    setType,
  };
};
