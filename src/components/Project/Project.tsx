import { motion, Variants } from "framer-motion";
import { ProjectThumb, ProjectThumbData } from "../ProjectThumb/ProjectThumb";
import { ProjectDetail } from "../ProjectDetail/ProjectDetail";
import { ProjectMotionStyle } from "../ProjectsOverview/ProjectsOverview";
import { useParams } from "react-router";

interface ProjectProps {
  positions: ProjectMotionStyle;
  project: ProjectThumbData;
}

function Project({ positions, project }: ProjectProps) {
  const { slug } = useParams();

  const hasAnyOpen = slug !== undefined;
  const isOpen = slug === project.slug;
  const thumbIsLeft = positions.thumb["left"] ?? false;

  const thumbVariantCase = hasAnyOpen
    ? thumbIsLeft
      ? "open-left"
      : "open-right"
    : "closed";

  const thumbContainer: Variants = {
    "open-left": {
      left: "500px",
      right: ".5rem",
      bottom: ".5rem",
    },
    "open-right": {
      left: ".5rem",
      right: "500px",
      bottom: ".5rem",
    },
    closed: {
      left: ".5rem",
      right: ".5rem",
      bottom: ".5rem",
    },
  };

  return (
    <>
      <motion.div className="pointer-events-none fixed inset-rem-1/2 top-[var(--header-height)] z-10">
        <ProjectThumb
          key={project.id}
          project={project}
          className="pointer-events-auto absolute"
          style={positions.thumb ?? {}}
        />
      </motion.div>
      {/* <ProjectDetail
        slug={project.slug}
        className="z-20 md:absolute md:w-[500px]"
        style={positions.detail ?? {}}
      /> */}
    </>
  );
}
export default Project;
