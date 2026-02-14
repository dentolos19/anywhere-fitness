function padTwoDigits(value: number) {
  return value.toString().padStart(2, "0");
}

export function formatDate(date: Date) {
  return (
    [date.getFullYear(), padTwoDigits(date.getMonth() + 1), padTwoDigits(date.getDate())].join("-") +
    " " +
    [padTwoDigits(date.getHours()), padTwoDigits(date.getMinutes()), padTwoDigits(date.getSeconds())].join(":")
  );
}
