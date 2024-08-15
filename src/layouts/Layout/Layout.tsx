import { ReactNode } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface ProjectIndexProps {
  children?: ReactNode | ReactNode[];
}

export function Layout({ children }: ProjectIndexProps) {
  return (
    <div className="flex min-h-[100dvh]">
      <div className="relative flex flex-1 flex-col gap-y-[1em] px-rem-1/2 py-rem-1 text-lg text-xl sm:py-[.3rem] lg:text-xl">
        <Header />
        {children}
        <Footer className="mt-auto" />
      </div>
    </div>
  );
}
