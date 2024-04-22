"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  //--------------------------------------------------------------------------------------
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date de l'invetaire" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.dob);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("dob")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "numeroRGE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Numero R.G.E" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.numeroRGE
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("numeroRGE")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "provenance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Provenance" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.provenance
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("provenance")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "enregistrement",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nmero d'iventaire" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.enregistrement
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("enregistrement")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "designation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Désignation" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.designation
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("designation")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "valeur",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valeur" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.valeur);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("valeur")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "affectation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Affectation" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.affectation
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("affectation")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "nature",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nature sortie" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.nature);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("nature")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "justificatif",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="justificatif" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.justificatif
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("justificatif")}
          </span>
        </div>
      );
    },
  },

  //-------------------------------------------------------------------------------
  {
    accessorKey: "observation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Observation" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.observation
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("observation")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
];
