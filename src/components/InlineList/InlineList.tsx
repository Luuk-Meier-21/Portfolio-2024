import { ReactNode } from "react";
import Slot from "../Slot/Slot";
import clsx from "clsx";

interface InlineListProps {
  asChild?: boolean;
  className?: string;
  children: ReactNode | ReactNode[];
  // delimiter: string;
}

function InlineList({ className, ...props }: InlineListProps) {
  const classes = clsx(
    "inline items-start justify-start [&>li]:inline-block [&>li:last-child]:after:content-none [&>li]:after:content-['_+'] [&>li]:after:mr-[.25em]",
    className,
  );

  return <ul data-component-name="InlineList" className={classes} {...props} />;
}
export default InlineList;
