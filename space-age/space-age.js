export const age = (planet, seconds) => {
  const secondsToMinutes = seconds / 60;
  const minutesToHours = secondsToMinutes / 60;
  const hoursToDays = minutesToHours / 24;
  const daysToYears = hoursToDays / 365.25;

  return daysToYears;
};
