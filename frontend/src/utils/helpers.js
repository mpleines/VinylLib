export const getYears = (startYear) => {
  let currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || 1900;

  while (startYear <= currentYear) {
    years.push(startYear++);
  }

  return years;
};

export const orderBy = (list, attribute, reverse) => {
  const ordered = list.sort((a, b) => {
    if (a[attribute] < b[attribute]) {
      return reverse ? 1 : -1;
    }
    if (a[attribute] > b[attribute]) {
      return reverse ? -1 : 1;
    }
    return 0;
  });
  return ordered;
};
