export const getYears = (startYear) => {
  let currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || 1900;

  while (startYear <= currentYear) {
    years.push(startYear++);
  }

  return years;
};
