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
  // Create a fresh copy of the table data
  const updatedTable = [
    {
      name: "Oxted & District",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Eastbourne United Association",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Reigate Priory",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Ringmer AFC",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Crawley Devils",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Westfield",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Cuckfield Rangers",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Rotherfield",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Holland Sports",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Battle Town",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Balcombe",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Copthorne II",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
    {
      name: "Sedlescombe Rangers",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
    },
  ];

  for (let i = 0; i < fixtures.length; i++) {
    const { homeScore, awayScore, homeTeam, awayTeam, status } = fixtures[i];

    let homeIndex = updatedTable.findIndex((entry) => entry.name === homeTeam);
    let awayIndex = updatedTable.findIndex((entry) => entry.name === awayTeam);

    updatedTable[homeIndex].played += 1;
    updatedTable[awayIndex].played += 1;
    updatedTable[homeIndex].for += homeScore;
    updatedTable[homeIndex].against += awayScore;
    updatedTable[awayIndex].for += awayScore;
    updatedTable[awayIndex].against += homeScore;

    if (status !== "Not started" && homeScore > awayScore) {
      updatedTable[homeIndex].wins += 1;
      updatedTable[awayIndex].loses += 1;
      updatedTable[homeIndex].points += 3;
    } else if (status !== "Not started" && homeScore < awayScore) {
      updatedTable[awayIndex].wins += 1;
      updatedTable[homeIndex].loses += 1;
      updatedTable[awayIndex].points += 3;
    } else if (status !== "Not started" && homeScore === awayScore) {
      updatedTable[homeIndex].draws += 1;
      updatedTable[awayIndex].draws += 1;
      updatedTable[awayIndex].points += 1;
      updatedTable[homeIndex].points += 1;
    }
  }

  // Sort the updated table data
  updatedTable.sort((a, b) => b.points - a.points);
  updatedTable.sort((a, b) => b.for - b.against - (a.for - a.against));
  updatedTable.sort((a, b) => b.for - a.for);

  return updatedTable;
};
