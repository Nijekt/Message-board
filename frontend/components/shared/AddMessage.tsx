"use client";

import React, { FC, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCreateMessageMutation } from "@/store/messagesApi";

type Props = {
  className?: string;
};

const AddMessage: FC<Props> = ({ className }) => {
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [addMessage] = useCreateMessageMutation();

  const handleAddMessage = async () => {
    if (!newMessage) return;

    try {
      await addMessage({ message: newMessage }).unwrap();
      setNewMessage("");
      setError(null);
    } catch (error: any) {
      if (error?.data?.errors) {
        setError(error.data.errors[0]?.msg);
      } else {
        setError("Failed to add message");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-10 relative">
      <div className="flex gap-4">
        <Input
          className="w-[450px]"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />

        <Button onClick={() => handleAddMessage()}>Add message</Button>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2 absolute top-10">{error}</p>
      )}
    </div>
  );
};

export default AddMessage;
