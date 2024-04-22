"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Numero d'ordre reforme" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  //--------------------------------------------------------------------------------------
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date de reforme" />
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
    accessorKey: "numeroinventaire",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Numero d&rsquo;ordre de l&rsquo;inventaire"
      />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.numeroinventaire
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("numeroinventaire")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "designation",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Designation de l&rsquo;objet"
      />
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
    accessorKey: "designation",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Numero de pièce justificative"
      />
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
    accessorKey: "prix",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="prix unité" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.prix.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("prix")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "montant",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Montant total" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.montant.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("montant")}
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
