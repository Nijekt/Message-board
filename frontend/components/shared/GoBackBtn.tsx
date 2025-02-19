import React, { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  className?: string;
};

const GoBackBtn: FC<Props> = ({ className }) => {
  return (
    <Link href={"/"}>
      <Button className={className}>Go Back</Button>
    </Link>
  );
};

export default GoBackBtn;
