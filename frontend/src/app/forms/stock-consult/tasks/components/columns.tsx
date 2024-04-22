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
      <DataTableColumnHeader column={column} title="Code Produit" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  //--------------------------------------------------------------------------------------

  {
    accessorKey: "categorie",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Categorie" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.categorie
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("categorie")}
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
    accessorKey: "unite",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unite Produit" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.unite);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("unite")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------

  {
    accessorKey: "qinitiale",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantite Initiale" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.qinitiale.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("qinitiale")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "qactuelle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantite Actuelle" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.qactuelle.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("qactuelle")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "reapprovisionnement",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Seuil reaprovisionnement" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.reapprovisionnement
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("reapprovisionnement")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "securite",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="seuile de sécurité" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.securite
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("securite")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "prixu",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prix Unitaire" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.prixu.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("prixu")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "Prixt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prix Total" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.Prixt.toString()
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Prixt")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
  {
    accessorKey: "limitedate",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Date limite de consomation"
      />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.limitedate
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("limitedate")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "specification1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Specification1" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.specification1
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("specification1")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "specification2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Specification2" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.specification2
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("specification2")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------

  {
    accessorKey: "Remarque",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remarque" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.Remarque
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Remarque")}
          </span>
        </div>
      );
    },
  },
  //-------------------------------------------------------------------------------
];
