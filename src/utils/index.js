export const unixTimestampToDate = unixTimestamp =>
  new Date(unixTimestamp * 1000);

export const getEnglishDay = (date = new Date()) => {
  const englishDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };
  return englishDays[date.getDay()];
};

export const stringify = (params = {}) =>
  new URLSearchParams(params).toString();
