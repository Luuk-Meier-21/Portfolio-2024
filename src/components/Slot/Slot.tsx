import { Children, cloneElement, isValidElement, ReactNode } from "react";

interface SlotProps {
  children: ReactNode | ReactNode[];
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

export default Slot;
