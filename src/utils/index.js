export const unixTimeToDay = unixTime => new Date(unixTime * 1000).getDay();

export const englishDays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};
