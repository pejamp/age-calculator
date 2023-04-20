export function calculate(newDate) {
  const date = new Date(`${newDate.year}-${newDate.month}-${newDate.day}`);
  const currentDate = new Date();
  
  let diffInYears = currentDate.getFullYear() - date.getFullYear();
  let diffInMonths = currentDate.getMonth() - date.getMonth();
  let diffInDays = currentDate.getDate() - date.getDate();

  if (diffInDays < 0) {
    diffInMonths--;
    const daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    diffInDays += daysInPrevMonth;
  }

  if (diffInMonths < 0) {
    diffInYears--;
    diffInMonths += 12;
  }

  return {
    year: diffInYears,
    month: diffInMonths,
    day: diffInDays
  }
}