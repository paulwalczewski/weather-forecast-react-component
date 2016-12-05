export const getDayName = (date) => {
  let d = new Date(date);
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekdays[d.getDay()];
}

export const getTime = (date) => {
  let d = new Date(date);
  let h =  d.getHours(), m = '00';
  let time = (h > 12) ? (h - 12 + ':' + m +' PM') : (h + ':' + m +' AM');

  return time;
}
