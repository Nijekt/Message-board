import React, { FC, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useUpdateMessageMutation } from "@/store/messagesApi";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Props = {
  message: string;
  id: string;
  router: AppRouterInstance;
  className?: string;
};

const EditMessage: FC<Props> = ({
  message: initialMessage,
  id,
  router,
  className,
}) => {
  const [message, setMessage] = useState(initialMessage);
  const [error, setError] = useState<string | null>(null);
  const [updateMessage] = useUpdateMessageMutation();

  const handleUpdateMessage = async () => {
    if (!message) return;
    try {
      await updateMessage({ id, message }).unwrap();
      setError(null);
      router.back();
    } catch (error: any) {
      if (error?.data?.errors) {
        setError(error.data.errors[0]?.msg);
      } else {
        setError("Failed to update message");
      }
    }
  };

  console.log(error, "error");

  return (
    <div className="flex flex-col gap-10 justify-center items-center relative">
      <Input
        className="w-[300px]"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-2 absolute ">{error}</p>}
      <Button className="w-[100px]" onClick={() => handleUpdateMessage()}>
        Confirm Edit
      </Button>
    </div>
  );
};

export default EditMessage;
