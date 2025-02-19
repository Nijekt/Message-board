import Link from "next/link";
import React, { FC } from "react";
import { Button } from "../ui/button";

type Props = {
  messageId: string;
  className?: string;
};

const EditBtn: FC<Props> = ({ messageId, className }) => {
  return (
    <Link href={`/message/${messageId}`} scroll={false}>
      <Button variant="outline">Edit</Button>
    </Link>
  );
};

export default EditBtn;
