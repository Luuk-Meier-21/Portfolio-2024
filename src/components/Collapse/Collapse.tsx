import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface CollapseProps {
  open: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
}

function Collapse({ open, children, className, ...props }: CollapseProps) {
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
      {...props}
    >
      {children}
    </motion.div>
  );
}
export default Collapse;
