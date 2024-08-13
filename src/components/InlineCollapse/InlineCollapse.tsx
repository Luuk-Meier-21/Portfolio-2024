import { useMeasure } from "@uidotdev/usehooks";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import Collapse from "../Collapse/Collapse";

interface InlineCollapseProps {
  open: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
}

function InlineCollapse({ open, children, className }: InlineCollapseProps) {
  const [target, { width, height }] = useMeasure();

  const classes = clsx("flex flex-col", className);

  const dropdownVariants: Variants = {
    open: {
      height: "auto",
    },
    closed: {
      height: 0,
    },
  };

  return (
    <Collapse
      data-component-name="InlineCollapse"
      open={open}
      className={classes}
    >
      <div style={{ height: height ?? 0 }}>
        <Collapse
          open={open}
          className="absolute left-0 right-0 overflow-hidden"
        >
          <div ref={target} className="flex w-full">
            {children}
          </div>
        </Collapse>
      </div>
    </Collapse>
  );
}
export default InlineCollapse;
