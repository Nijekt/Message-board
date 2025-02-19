import React, { FC } from "react";
import { TableCell, TableRow } from "../ui/table";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

type Message = {
  id: string;
  message: string;
};

type Props = {
  data: Message[];
  className?: string;
};

const TableContent: FC<Props> = ({ data, className }) => {
  return (
    <>
      {data.map((msg) => (
        <TableRow key={msg.id}>
          <TableCell>{msg.id}</TableCell>
          <TableCell className="w-full max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">
            {msg.message}
          </TableCell>
          <TableCell className="flex gap-4">
            <EditBtn messageId={msg.id} />
            <DeleteBtn messageId={msg.id} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TableContent;
