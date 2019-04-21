const pad = (number, length) => {
  return number.toString().padStart(length, '0')
}

export const formatDate = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  return [
    year,
    pad(month, 2),
    pad(day, 2),
  ].join('-');
};