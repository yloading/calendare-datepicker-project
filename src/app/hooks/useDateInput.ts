import { useState } from "react";

export const useDateInput = () => {
  const [dateInput, setDateInput] = useState("");
  const handleDateOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const data = event.currentTarget.getAttribute("data-object");
    if (data) {
      const parsedData = JSON.parse(data);
      setDateInput(parsedData.value);
    }
  };

  return {
    handleDateOnClick,
    dateInput,
  };
};
