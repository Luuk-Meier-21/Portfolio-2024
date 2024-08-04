import { AnimatePresence } from "framer-motion";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useRef,
} from "react";

interface InViewMotionProps {
  asChild: boolean;
}

function Slot({ children }: { children?: ReactNode }) {
  if (Children.count(children) > 1) {
    throw new Error("Only one child allowed");
  }
  if (isValidElement(children)) {
    return cloneElement(children);
  }
  return null;
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
