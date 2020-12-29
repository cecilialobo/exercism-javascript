export const gigasecond = (newDate) => {
  newDate.setUTCSeconds(newDate.getSeconds() + 1000000000 );
  return newDate;
};