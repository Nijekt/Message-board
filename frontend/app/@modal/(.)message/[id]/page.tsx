"use client";

import Modal from "@/components/shared/Modal";
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
    <div>
      <Modal message={data.message} id={id} />
    </div>
  );
};

export default Message;
