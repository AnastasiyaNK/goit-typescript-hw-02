/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const day: WeekDay = WeekDay.Monday;

const isWeekend = (day: WeekDay): boolean => {
  if (day === WeekDay.Saturday || day === WeekDay.Sunday) return true;
  return false;
};
