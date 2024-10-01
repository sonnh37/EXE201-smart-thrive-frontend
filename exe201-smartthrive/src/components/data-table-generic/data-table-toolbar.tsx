import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterEnum } from "@/types/filter-enum";
import { FormFilterAdvanced } from "@/types/form-filter-advanced";
import { BaseQueryableQuery } from "@/types/request/base-query";
import { BusinessResult } from "@/types/response/business-result";
import { zodResolver } from "@hookform/resolvers/zod";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  PaginationState,
  SortingState,
  Table,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { PlusCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { useForm, UseFormReturn, useWatch } from "react-hook-form";
import { FiFilter } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { z, ZodObject } from "zod";
import { DeleteBaseEntitysDialog } from "./delete-dialog-generic";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  form: UseFormReturn<
    {
      [x: string]: any;
    },
    any,
    undefined
  >;
  table: Table<TData>;
  filterEnums: FilterEnum[];
  deleteData: (id: string) => Promise<BusinessResult<null>>;
  isFiltered: boolean;
  isSheetOpen: boolean;
  columnSearch: string;
  handleFilterClick: () => void; // Thêm hàm này
  handleSheetChange: (open: boolean) => void; // Thêm hàm này
  handleClear: () => void; // Thêm hàm này
  renderFormFields: () => JSX.Element[];
}

export function DataTableToolbar<TData>({
  form,
  table,
  filterEnums,
  isFiltered,
  columnSearch,
  deleteData,
  isSheetOpen,
  handleFilterClick,
  handleSheetChange,
  handleClear,
  renderFormFields
}: DataTableToolbarProps<TData>) {
  const side = "left";
  const pathname = usePathname();
  const getCurrentTableData = () => {
    return table.getRowModel().rows.map(row => row.original);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={`Enter ${columnSearch}...`}
          value={(form.getValues(columnSearch) as string) ?? ""}
          onChange={(event) =>
            (form.setValue(columnSearch, event.target.value))
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {filterEnums.map((filter: any) => {
          const column = table.getColumn(filter.columnId);
          if (column) {
            return (
              <DataTableFacetedFilter
                key={filter.columnId}
                column={column}
                title={filter.title}
                options={filter.options}
              />
            );
          }
          return null;
        })}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="ml-auto flex items-center gap-2 ">
        {/* Hand by hand */}
        {table.getFilteredSelectedRowModel().rows.length > 0 ? (
          <DeleteBaseEntitysDialog
            list={table
              .getFilteredSelectedRowModel()
              .rows.map((row) => row.original)}
            deleteData={deleteData}
            onSuccess={() => table.toggleAllRowsSelected(false)}
          />
        ) : null}
        <Sheet key={side} open={isSheetOpen} onOpenChange={handleSheetChange}>
          <SheetTrigger>
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-1"
              onClick={handleFilterClick}
            >
              <FiFilter className="h-4 w-4" />
              {/* <span className=" sm:whitespace-nowrap">Filter Advanced</span> */}
            </Button>
          </SheetTrigger>

          <SheetContent side={side} className="dark:backdrop-blur-3 dark:bg-white/5">
            <Form {...form}>
              <form className="space-y-8">
                <SheetHeader>
                  <SheetTitle>Filter advanced</SheetTitle>
                  <SheetDescription>
                    This action can update when you click the button at the
                    footer.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">{renderFormFields()}</div>

                <SheetFooter>
                  <SheetClose asChild>
                    <Button onClick={handleClear}>Clear filter</Button>
                  </SheetClose>
                </SheetFooter>
              </form>
            </Form>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto hidden h-8 lg:flex"
            >
              <MixerHorizontalIcon className="h-4 w-4" />
              {/* View */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        <CSVLink
          filename="export_data.csv"
          data={JSON.stringify(getCurrentTableData() || [])}
          target="_blank"
        >
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <MdOutlineFileDownload className="h-4 w-4" />
          </Button>
        </CSVLink>

        <Link
          className="text-primary-foreground sm:whitespace-nowrap"
          href={`${pathname}/new`}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 6px 20px rgba(0,118,255,0.23)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="sm"
              className="shadow-[0_4px_14px_0_rgb(0,118,255,79%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] font-light transition duration-300 ease-linear"
            >
              <PlusCircle className="fill-primary-background h-5 w-5" />
              {/* Add */}
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
