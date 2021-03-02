export const date = new Date();
export const weekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "December",
];
export const year = date.getFullYear();
export const month = monthArray[date.getMonth()];
export const day = date.getDate();
export const week = weekArray[day];
export const currentHour = date.getHours();
