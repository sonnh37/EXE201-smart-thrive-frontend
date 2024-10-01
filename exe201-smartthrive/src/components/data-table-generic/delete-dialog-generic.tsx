"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { BusinessResult } from "@/types/response/business-result";
import { useQueryClient } from "@tanstack/react-query";
import { Table as ReactTable, Row } from "@tanstack/react-table";
import { Icons } from "../icons";
interface DeleteBaseEntitysDialogProps<TData>
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean;
  list: Row<TData>["original"][]
  onSuccess?: () => void;
  deleteData: (id: string) => Promise<BusinessResult<null>>;
}

export function DeleteBaseEntitysDialog<TData>({
  showTrigger = true,
  list,
  onSuccess,
  deleteData,
  ...props
}: DeleteBaseEntitysDialogProps<TData>) {
  const [isDeletePending, startDeleteTransition] = React.useTransition();
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const queryClient = useQueryClient();
  function hasId(item: any): item is { id: string } {
    return item && typeof item.id === "string";
  }

  function onDelete() {
    startDeleteTransition(async () => {
      try {
        for (const task of list) {
          if (hasId(task)) {
            const response = await deleteData(task.id);
            if (response.status == 1) {
              toast.success(response.message);
            } else {
              toast.error(response.message);
            }
          } else {
            toast.error("Fail!");
          }
        }
        if (onSuccess) {
          queryClient.invalidateQueries({ queryKey: ["data"] });
          props.onOpenChange?.(false);
          onSuccess();
        }
      } catch (error) {
        toast.error(error as string);
      }
    });
  }

  if (isDesktop) {
    return (
      <Dialog {...props}>
        {showTrigger ? (
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <TrashIcon className="mr-2 size-4" aria-hidden="true" />
              Delete ({list.length})
            </Button>
          </DialogTrigger>
        ) : null}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your{" "}
              <span className="font-medium">{list.length}</span>
              {list.length === 1 ? " task" : " list"} from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:space-x-0">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              aria-label="Delete selected rows"
              variant="destructive"
              onClick={onDelete}
              disabled={isDeletePending}
            >
              {isDeletePending && (
                <Icons.spinner
                  className="mr-2 size-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer {...props}>
      {showTrigger ? (
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
            <TrashIcon className="mr-2 size-4" aria-hidden="true" />
            Delete ({list.length})
          </Button>
        </DrawerTrigger>
      ) : null}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. This will permanently delete your{" "}
            <span className="font-medium">{list.length}</span>
            {list.length === 1 ? " task" : " list"} from our servers.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="gap-2 sm:space-x-0">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button
            aria-label="Delete selected rows"
            variant="destructive"
            onClick={onDelete}
            disabled={isDeletePending}
          >
            {isDeletePending && (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Delete
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
