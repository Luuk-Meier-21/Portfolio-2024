import React, { ElementType } from "react";
import Slot from "../components/Slot/Slot";

type UnknownElement = ElementType | React.JSXElementConstructor<any>;

export function useAsChild<
  DT extends string | React.JSXElementConstructor<any> =
    | string
    | React.JSXElementConstructor<any>,
>(condition: boolean, defaultElement: DT): UnknownElement | DT {
  const Comp = condition ? Slot : defaultElement;

  return Comp;
}
