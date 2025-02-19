"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetMessagesQuery } from "@/store/messagesApi";
import TableContent from "./TableContent";

type Props = {
  className?: string;
};

const MessageTable: FC<Props> = ({ className }) => {
  const { data = [], isLoading } = useGetMessagesQuery([]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={cn("w-[1200px]", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableContent data={data} />
        </TableBody>
      </Table>
    </div>
  );
};

export default MessageTable;
