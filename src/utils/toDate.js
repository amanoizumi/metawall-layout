export const timestampToDate = (timestamp) => {
  const dateFormat = new Date(timestamp);
  const yy = dateFormat.getFullYear();
  const mm = dateFormat.getMonth() + 1;
  const dd = dateFormat.getDate();
  let h = dateFormat.getHours();
  let m = dateFormat.getMinutes();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;

  const dateString = `${yy}/${mm}/${dd} ${h}:${m}`;

  return dateString;
};
