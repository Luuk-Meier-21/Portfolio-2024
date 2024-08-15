import { useQuery } from "urql";
import { ProjectsListQuery } from "../../queries/project";
import { ProjectThumb, ProjectThumbData } from "../ProjectThumb/ProjectThumb";
import {
  AnimatePresence,
  delay,
  motion,
  MotionStyle,
  Variants,
} from "framer-motion";
import { ProjectDetail } from "../ProjectDetail/ProjectDetail";
import { useParams } from "react-router";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bracket from "../Bracket/Bracket";
import Project from "../Project/Project";
import clsx from "clsx";
import { FADE_TRANSITION, fadeTransition } from "../../utils/animation";

export interface ProjectMotionStyle {
  thumb: MotionStyle;
  detail: MotionStyle;
}

interface ProjectOverviewProps {}

export function ProjectOverview({}: ProjectOverviewProps) {
  const { slug } = useParams();
  const [result] = useQuery({
    query: ProjectsListQuery,
  });

  const [openIndex, setOpenIndex] = useState(-1);

  const { data, fetching, error } = result;

  const projects = data?.projects_b?.sort((a, b) => {
    const ad = new Date(a.date);
    const bd = new Date(b.date);

    return bd.getTime() - ad.getTime();
  });

  useEffect(() => {
    if (slug !== undefined) {
      setOpenIndex(
        projects?.findIndex((project) => project.slug === slug) ?? -1,
      );
    }
  }, [slug, projects]);

  // if (fetching) return <p className="p-rem-1/2">Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <AnimatePresence>
      {projects && (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fadeTransition({ delay: 0.2 })}
          className="relative mb-auto flex flex-col items-start justify-start gap-x-[1ch]"
        >
          <h1 className="flex min-w-[25%] text-lg sm:block lg:min-w-[20%] lg:text-xl">
            Projecten:
          </h1>
          {projects.map((project, index, array) => (
            <ProjectThumb project={project}>
              <ProjectDetail slug={project.slug} />
            </ProjectThumb>
          ))}
        </motion.main>
      )}
    </AnimatePresence>
  );
}
