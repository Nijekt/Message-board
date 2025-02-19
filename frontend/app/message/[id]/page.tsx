"use client";

import DeleteBtn from "@/components/shared/DeleteBtn";
import EditBtn from "@/components/shared/EditBtn";
import GoBackBtn from "@/components/shared/GoBackBtn";
import { useGetMessageByIdQuery } from "@/store/messagesApi";
import React, { FC } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Message: FC<Props> = ({ params: { id } }) => {
  const { data, isLoading } = useGetMessageByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col items-center font-weight-bold gap-2">
      <h1 className="text-[36px]">Full message</h1>
      <span className="flex gap-4">
        <GoBackBtn />
        <DeleteBtn messageId={id} />
      </span>

      <p className="w-[700px] h-auto break-words overflow-wrap text-center">
        {data.message}
      </p>
    </div>
  );
};

export default Message;
