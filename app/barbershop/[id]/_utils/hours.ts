import { setHours, setMinutes, format, addMinutes } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
  const startTime = setMinutes(setHours(date, 8), 0);
  const endTime = setMinutes(setHours(date, 20), 0);
  const interval = 45;
  const timeList = [];

  let currentTime = startTime;
  while (currentTime < endTime) {
    timeList.push(format(currentTime, "HH:mm"));
    currentTime = addMinutes(currentTime, interval);
  }
  return timeList;
}
