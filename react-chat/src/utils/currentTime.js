const currentTime = () => {
  const date = new Date();

  let hour = date.getHours();

  const minute = date.getMinutes();

  const amp = hour >= 12 ? "pm" : "am";

  if (hour > 11) hour -= 12;

  if (hour === 24) hour = 0;

  return hour + ":" + minute + " " + amp;
};

export default currentTime;
