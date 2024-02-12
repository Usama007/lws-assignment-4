const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
};

const publishedDateConvert = (dateTime) => {
  const currentDate = new Date();
  const inputDate = new Date(dateTime);

  const diffInMs = currentDate - inputDate;

  if (diffInMs < 86400000) {
    const hoursDiff = Math.abs(Math.floor(diffInMs / (1000 * 60 * 60)));
    return hoursDiff === 0
      ? "Less than an hour ago"
      : `${hoursDiff} hour${hoursDiff > 1 ? "s" : ""} ago`;
  } else if (isSameDate(currentDate, inputDate)) {
    const hour = inputDate.getHours();
    return hour + " o'clock";
  } else {
    return inputDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  }
};

const isSameDate = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export { getCurrentDate, publishedDateConvert };
