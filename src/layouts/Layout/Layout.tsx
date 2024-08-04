import { ReactNode } from "react";
import Header from "../../components/Header/Header";
import { ProjectOverview } from "../../components/ProjectsOverview/ProjectsOverview";

interface ProjectIndexProps {
  children?: ReactNode | ReactNode[];
}

export function Layout({ children }: ProjectIndexProps) {
  return (
    <div className="grid min-h-screen grid-rows-[var(--header-height),auto]">
      <div>
        <Header />
      </div>
      <ProjectOverview>{children}</ProjectOverview>
    </div>
  );
}
