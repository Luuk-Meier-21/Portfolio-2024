import clsx from "clsx";
import { motion, Transition, Variants } from "framer-motion";
import { ReactNode } from "react";
import { DROPDOWN_TRANSITION } from "../../utils/animation";

interface CollapseProps {
  open: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
  transition?: Transition;
}

function Collapse({
  open,
  children,
  className,
  transition,
  ...props
}: CollapseProps) {
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
    <motion.div
      data-component-name="Collapse"
      className={classes}
      variants={dropdownVariants}
      initial={open ? "open" : "closed"}
      animate={open ? "open" : "closed"}
      transition={transition ?? DROPDOWN_TRANSITION}
      {...props}
    >
      {children}
    </motion.div>
  );
}
export default Collapse;
