function calculateYearsPassed(date) {
  let todayDate = new Date().getTime();
  let previousDate = new Date(date).getTime();
  const conversionToYears = 365.25 * 24 * 60 * 60 * 1000;
  let yearsPassed = Math.floor((todayDate - previousDate) / conversionToYears);
  return yearsPassed;
}

console.log(calculateYearsPassed("1990-01-01"));
console.log(calculateYearsPassed("1972-12-04"));
