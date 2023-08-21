const DATEOPTIONS = {
  dateStyle: "medium",
};
const TIMEOPTIONS = {
  timeStyle: "short",
};

export const convertDate = (date) => {
  const d = new Date(date);

  return `${d.toLocaleDateString("en-GB", DATEOPTIONS)} ${d.toLocaleTimeString(
    "en-GB",
    TIMEOPTIONS
  )}`;
};

export const getStatus = (fixture) => {
  const date = new Date();

  const week = date.setDate(date.getDate() + 7);
  const today = new Date();
  const matchDate = new Date(`${fixture.date} ${fixture.time}`);
  const timeDifference = today.getTime() - matchDate.getTime();

  if (fixture.result) {
    return "Completed";
  }

  if (timeDifference < 7200000 && timeDifference > 0) {
    return "Playing Now";
  }

  if (matchDate.getTime() > today.getTime() && matchDate.getTime() < week) {
    return "Upcoming";
  }

  return "";
};

export const calculatesTableData = (table) => {
  table.forEach((entry) => {
    entry.points = entry.wins * 3 + entry.draws;
    entry.difference = entry.for - entry.against;
    entry.played = entry.wins + entry.loses + entry.draws;
  });
  return table;
};
