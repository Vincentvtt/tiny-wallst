import dayjs = require("dayjs");

export const getDate = (date: string): string => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const getDate90DaysBefore = (date: string): string => {
  return dayjs(date).subtract(90, "day").format("YYYY-MM-DD");
};
