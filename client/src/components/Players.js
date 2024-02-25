import { useMemo } from "react";
import { Table } from "./ui/Table";

export const Players = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        header: "Player",
        accessorKey: "name",
      },
      {
        header: "No.",
        accessorKey: "number",
      },
      {
        header: "Position",
        accessorKey: "position",
      },
      {
        header: "Appearances",
        accessorKey: "appearances",
      },
      {
        header: "Goals",
        accessorKey: "goals",
      },
      {
        header: "Penalties",
        accessorKey: "penalties",
      },
      {
        header: "Assists",
        accessorKey: "assists",
      },
      {
        header: "Yellow cards",
        accessorKey: "yellowCards",
      },
      {
        header: "Red cards",
        accessorKey: "redCards",
      },
      {
        header: "Started",
        accessorKey: "started",
      },
      {
        header: "Man of the match",
        accessorKey: "mom",
      },
      {
        header: "Clean sheets",
        accessorKey: "cleanSheets",
      },
    ],
    []
  );

  return <Table data={data} columns={columns} />;
};
