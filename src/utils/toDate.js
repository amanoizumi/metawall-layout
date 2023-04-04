export const timestampToDate = (timestamp) => {
  const dateFormat = new Date(timestamp);
  const dateString = `${dateFormat.getFullYear()}/${
    dateFormat.getMonth() + 1
  }/${dateFormat.getDate()} ${dateFormat.getHours()}:${dateFormat.getMinutes()}`;
  return dateString;
};
