import { ReactNode } from "react";

interface BracketProps {
  children?: ReactNode | ReactNode[];
}

function Bracket({ children }: BracketProps) {
  return (
    <>
      {"{"}
      {children}
      {"}"}
    </>
  );
}
export default Bracket;
