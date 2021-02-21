export const gigasecond = (date) => {
  const dateToModify = date.getTime();
  const dateWithGigaseconds = new Date(dateToModify + 1000000000000);
  return dateWithGigaseconds;
};