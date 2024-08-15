import { useMeasure } from "@uidotdev/usehooks";
import clsx from "clsx";
import { motion, Transition, Variants } from "framer-motion";
import { ReactNode } from "react";
import Collapse from "../Collapse/Collapse";
import {
  DEFAULT_DURATION_SEC,
  dropdownTransition,
} from "../../utils/animation";

interface InlineCollapseProps {
  open: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
}

function InlineCollapse({ open, children, className }: InlineCollapseProps) {
  const [target, { height }] = useMeasure();

  const modifier = height ?? 0 / 100;
  const time = modifier * (DEFAULT_DURATION_SEC / 500);
  if (open) {
    console.log(time);
  }
  const transition: Transition = dropdownTransition({
    duration: time > DEFAULT_DURATION_SEC ? time : DEFAULT_DURATION_SEC,
  });

  return (
    <Collapse
      data-component-name="InlineCollapse"
      open={open}
      className={className}
      // transition={transition}
    >
      <div style={{ height: height ?? 0 }}>
        <Collapse
          open={open}
          className="absolute left-0 right-0 overflow-hidden"
          // transition={transition}
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
