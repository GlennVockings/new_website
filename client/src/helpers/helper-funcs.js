import { mainTeam } from "./constants";

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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
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
      show: false,
    },
    {
      name: "Lindfield",
      played: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      for: 0,
      against: 0,
      points: 0,
      show: false,
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
  updatedTable.sort((a, b) => b.for - b.against - (a.for - a.against));
  updatedTable.sort((a, b) => b.for - a.for);
  updatedTable.sort((a, b) => b.points - a.points);

  for (let i = 0; i < updatedTable.length; i++) {
    if (updatedTable[i].name === mainTeam) {
      if (i === 0) {
        updatedTable[i].show = true;
        updatedTable[i + 1].show = true;
        updatedTable[i + 2].show = true;
        updatedTable[i + 3].show = true;
      } else if (i === 1) {
        updatedTable[i - 1].show = true;
        updatedTable[i].show = true;
        updatedTable[i + 1].show = true;
        updatedTable[i + 2].show = true;
      } else if (i === 12) {
        updatedTable[i - 2].show = true;
        updatedTable[i - 1].show = true;
        updatedTable[i].show = true;
        updatedTable[i + 1].show = true;
      } else if (i === 13) {
        updatedTable[i - 3].show = true;
        updatedTable[i - 2].show = true;
        updatedTable[i - 1].show = true;
        updatedTable[i].show = true;
      } else if (i >= 2) {
        updatedTable[i - 2].show = true;
        updatedTable[i - 1].show = true;
        updatedTable[i].show = true;
        updatedTable[i + 1].show = true;
        updatedTable[i + 2].show = true;
      }
    }
  }

  return updatedTable;
};

export const isMobile = function isMobileDevice() {
  const userAgent = navigator.userAgent;
  const mobileRegex =
    /Mobile|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|Opera Mini|IEMobile/i;
  return mobileRegex.test(userAgent);
};

export function splitTextWithCapital(text) {
  return text.split(/(?=[A-Z])/).join(" ");
}
