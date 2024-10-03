"use client";

import { DataTableColumnHeader } from "@/components/common/data-table-generic/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { OrderStatus, PaymentMethod } from "@/types/enums/order";
import { Order } from "@/types/order";
import { ColumnDef } from "@tanstack/react-table";
import Actions from "./actions";
import Image from "next/image";

export const columns: ColumnDef<Order>[] = [
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
      />
    ),
    cell: ({ row }) => {

      const isDeleted = row.getValue("isDeleted") as boolean;
      if (isDeleted) {
        return <></>;
      }
      return <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />;
    },

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    cell: ({ row }) => {
      const paymentMethod = row.getValue("paymentMethod") as PaymentMethod;
      const paymentMethodText = PaymentMethod[paymentMethod];

      return <span>{paymentMethodText}</span>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="truncate max-w-xs">{row.getValue("description")}</div>
      );
    },
  },
  {
    accessorKey: "createdDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data created" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdDate"));
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as OrderStatus;
      const statusText = OrderStatus[status];

      let badgeVariant:
        | "secondary"
        | "destructive"
        | "default"
        | "outline"
        | null = "default";

      switch (status) {
        case OrderStatus.Pending:
          badgeVariant = "secondary";
          break;
        case OrderStatus.Completed:
          badgeVariant = "default";
          break;
        case OrderStatus.Cancelled:
          badgeVariant = "destructive";
          break;
        default:
          badgeVariant = "default";
      }

      return <Badge variant={badgeVariant}>{statusText}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "totalPrice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Price" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));

      const formatted = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "isDeleted",
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => {
      const isDeleted = row.getValue("isDeleted") as boolean;
      if (!isDeleted) {
        return (
          <Image
            src="/check.png"
            width={500}
            height={500}
            alt="Gallery Icon"
            className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
          />
        );
      }
      return (
        <Image
          src="/uncheck.png"
          width={500}
          height={500}
          alt="Gallery Icon"
          className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
        />
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];
