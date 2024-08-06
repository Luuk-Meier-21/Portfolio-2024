import { ReactNode } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface ProjectIndexProps {
  children?: ReactNode | ReactNode[];
}

export function Layout({ children }: ProjectIndexProps) {
  return (
    <div className="flex min-h-[100dvh]">
      <div className="grid flex-1 grid-rows-[repeat(4,minmax(calc(25vh-(1rem/4)),auto))] gap-x-[1ch] p-rem-1/2">
        <Header className="" />
        {children}
        <Footer className="-row-end-1" />
      </div>
    </div>
  );
}
