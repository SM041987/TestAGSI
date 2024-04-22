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
    accessorKey: "enregistrement",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Enregistrement" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("enregistrement")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  //--------------------------------------------------------------------------------------
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
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
    accessorKey: "designation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Designation" />
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
    accessorKey: "numeroBR",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Numero B.R." />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.numeroBR
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("numeroBR")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "unit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unite" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.unit);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("unit")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "quantite",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantite" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.quantite.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("quantite")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "prix",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prix unitaire" />
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
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.total.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("total")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "justification",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Justification" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.justification
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("justification")}
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
