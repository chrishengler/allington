function getDaySuffix(day) {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const daySuffix = getDaySuffix(day);
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}${daySuffix} ${month} ${year}\n${hours}:${minutes}`;
}


export default formatTimestamp