import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Slot from "../Slot/Slot";

interface InViewMotionProps {
  asChild: boolean;
}

function InViewMotion({ asChild, ...props }: InViewMotionProps) {
  const ref = useRef(null);
  const Comp = asChild ? Slot : "button";

  return (
    <AnimatePresence>
      <div data-component-name="InViewMotion">
        <Comp ref={ref} {...props} />;
      </div>
    </AnimatePresence>
  );
}
export default InViewMotion;
