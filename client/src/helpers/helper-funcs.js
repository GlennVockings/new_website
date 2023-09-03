import { table } from "./constants";

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

export const calculatesTableData = (fixtures) => {
  console.log(fixtures);
  fixtures.forEach((fixture) => {
    const { homeScore, awayScore, homeTeam, awayTeam, status } = fixture;
    const homeIndex = table.findIndex((fixture) => fixture.name === homeTeam);
    const awayIndex = table.findIndex((fixture) => fixture.name === awayTeam);

    console.log(table[homeIndex]);

    table[homeIndex].played += 1;
    table[awayIndex].played += 1;
    table[homeIndex].for += homeScore;
    table[homeIndex].against += awayScore;
    table[awayIndex].for += awayScore;
    table[awayIndex].against += homeScore;

    if (status !== "Not started" && homeScore > awayScore) {
      table[homeIndex].wins += 1;
      table[awayIndex].loses += 1;
      table[homeIndex].points += 3;
    } else if (status !== "Not started" && homeScore < awayScore) {
      table[awayIndex].wins += 1;
      table[homeIndex].loses += 1;
      table[awayIndex].points += 3;
    } else if (status !== "Not started" && homeScore === awayScore) {
      table[homeIndex].draws += 1;
      table[awayIndex].draws += 1;
      table[awayIndex].points += 1;
      table[homeIndex].points += 1;
    }
  });

  table.sort((a, b) => b.points - a.points);
  table.sort((a, b) => b.for - b.against - (a.for - a.against));
  table.sort((a, b) => b.for - a.for);

  return table;
};
