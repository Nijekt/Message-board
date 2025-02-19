"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import EditMessage from "./EditMessage";

type Props = {
  message: string;
  id: string;
  className?: string;
};

const Modal: FC<Props> = ({ message, id, className }) => {
  const router = useRouter();
  return (
    <>
      <Dialog open={true} onOpenChange={() => router.back()}>
        <DialogContent className="p-0 w-[500px] max-w-[500px] min-h-[300px] bg-white overflow-hidden">
          <EditMessage message={message} id={id} router={router} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
