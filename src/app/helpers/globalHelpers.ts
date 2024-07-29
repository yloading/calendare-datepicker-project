// format date to yyyy-mm-dd
export const formatDate = (date: string) => {
  if (date && date.length >= 10) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(newDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    if (newDate.toString() === "Invalid Date") {
      return date;
    }
    return formattedDate;
  }
};
