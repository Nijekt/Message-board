"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";
import { useDeleteMessageMutation } from "@/store/messagesApi";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  messageId: string;
  className?: string;
};

const DeleteBtn: FC<Props> = ({ messageId, className }) => {
  const [deleteMessage] = useDeleteMessageMutation();
  const path = usePathname();
  const router = useRouter();

  const handleDeleteMessage = async (id: string) => {
    try {
      await deleteMessage(id);

      if (path !== "/") {
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to delete message:", error);
    }
  };

  return (
    <Button
      variant="destructive"
      onClick={() => handleDeleteMessage(messageId)}
      className={className}
    >
      Delete
    </Button>
  );
};

export default DeleteBtn;
