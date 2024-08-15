import { ReactNode } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface ProjectIndexProps {
  children?: ReactNode | ReactNode[];
}

export function Layout({ children }: ProjectIndexProps) {
  return (
    <div className="flex min-h-[100dvh]">
      <div className="flex flex-1 flex-col gap-y-[1em] px-rem-1/2 py-[.3rem] text-lg text-xl lg:text-xl">
        <Header className="" />
        {children}
        <Footer className="mt-auto" />
      </div>
    </div>
  );
}
