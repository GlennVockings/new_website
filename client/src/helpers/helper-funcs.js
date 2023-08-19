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

export const playerTableHelper = (data) => {
  let appearancesGroup = [];
  let goalsGroup = [];
  let penalitiesGroup = [];
  let assistsGroup = [];
  let yellowCardsGroup = [];
  let redCardGroup = [];
  let startedGroup = [];
  let pomGroup = [];
  let cleanSheetsGroup = [];

  data.forEach((player) => {
    appearancesGroup.push(player.stats.appearances);
    goalsGroup.push(player.stats.goals);
    penalitiesGroup.push(player.stats.penalities);
    assistsGroup.push(player.stats.assists);
    yellowCardsGroup.push(player.stats.yellowCards);
    redCardGroup.push(player.stats.redCards);
    startedGroup.push(player.stats.started);
    pomGroup.push(player.stats.mom);
    cleanSheetsGroup.push(player.stats.cleanSheets);
  });

  const newData = {
    appearances: appearancesGroup,
    goals: goalsGroup,
    penalities: penalitiesGroup,
    assists: assistsGroup,
    yellowCards: yellowCardsGroup,
    redCards: redCardGroup,
    pom: pomGroup,
    cleanSheets: cleanSheetsGroup,
  };

  return newData;
};
