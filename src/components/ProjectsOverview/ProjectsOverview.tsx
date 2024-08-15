import { useQuery } from "urql";
import { ProjectThumb } from "../ProjectThumb/ProjectThumb";
import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import { ProjectDetail } from "../ProjectDetail/ProjectDetail";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  FADE_TRANSITION,
  FADE_TRANSITION_DELAY,
  fadeTransition,
} from "../../utils/animation";
import { projectsListQuery } from "../../queries/project";

export interface ProjectMotionStyle {
  thumb: MotionStyle;
  detail: MotionStyle;
}

interface ProjectOverviewProps {}

export function ProjectOverview({}: ProjectOverviewProps) {
  const { slug } = useParams();
  const [result] = useQuery({
    query: projectsListQuery,
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
          transition={FADE_TRANSITION_DELAY}
          className="relative mb-auto flex flex-col items-start justify-start gap-x-rem-1/2 sm:flex-row"
        >
          <h1 className="flex min-w-[25vw] text-lg sm:block lg:min-w-[20vw] lg:text-xl">
            Projecten:
          </h1>
          <ul>
            {projects.map((project, index, array) => (
              <ProjectThumb project={project}>
                <ProjectDetail slug={project.slug} />
              </ProjectThumb>
            ))}
          </ul>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
