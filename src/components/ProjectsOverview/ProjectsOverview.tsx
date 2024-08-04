import { useQuery } from "urql";
import { ProjectsListQuery } from "../../queries/project";
import { ProjectThumb, ProjectThumbData } from "../ProjectThumb/ProjectThumb";
import { AnimatePresence, motion, MotionStyle, Variants } from "framer-motion";
import { ProjectDetail } from "../ProjectDetail/ProjectDetail";
import { useParams } from "react-router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export interface ProjectMotionStyle {
  thumb: MotionStyle;
  detail: MotionStyle;
}

const PROJECT_POSITION_STYLES: ProjectMotionStyle[] = [
  {
    thumb: {
      left: "0%",
    },
    detail: {
      right: "20%",
    },
  },
  {
    thumb: {
      left: "15%",
      bottom: "10%",
    },
    detail: {},
  },
  {
    thumb: {
      left: "32%",
      top: "20%",
    },
    detail: {},
  },
  {
    thumb: {
      right: "40%",
      bottom: "40%",
    },
    detail: {},
  },
  {
    thumb: {
      right: "20%",
      top: "10%",
    },
    detail: {},
  },
  {
    thumb: {
      right: "0%",
      bottom: "20%",
    },
    detail: {},
  },
];

export function ProjectOverview({ children }: Props) {
  const { slug } = useParams();
  const [result] = useQuery({
    query: ProjectsListQuery,
  });

  const { data, fetching, error } = result;

  // if (fetching) return <p className="p-rem-1/2">Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const hasProjectOpen = slug !== undefined;

  const overviewContainer: Variants = {
    full: {
      opacity: 1,
      height: "calc(100vh - var(--header-height))",
    },
    focus: {
      opacity: 1,
      height: "var(--header-height)",
    },
  };

  const detailContainer: Variants = {
    closed: {
      y: "100vh",
      opacity: 0,
    },
    open: {
      y: "0",
      opacity: 1,
    },
  };

  const thumb: Variants = {
    blur: {
      filter: "blur(5px)",
      opacity: 0,
    },
    normal: {
      filter: "blur(0px)",
      opacity: 1,
    },
    focus: {
      filter: "blur(0px)",
      opacity: 1,
    },
  };

  return (
    <main>
      <AnimatePresence>
        {data && (
          <motion.menu
            variants={overviewContainer}
            initial={hasProjectOpen ? "focus" : "full"}
            animate={hasProjectOpen ? "focus" : "full"}
            exit={"loading"}
            transition={{
              duration: 0.4,
            }}
            className="relative mx-rem-1/2 flex flex-row"
          >
            {data!.projects.map((project, i) => (
              <motion.div
                variants={thumb}
                whileHover={"focus"}
                initial={
                  hasProjectOpen
                    ? project.slug === slug
                      ? "focus"
                      : "blur"
                    : "normal"
                }
                animate={
                  hasProjectOpen
                    ? project.slug === slug
                      ? "focus"
                      : "blur"
                    : "normal"
                }
                className="absolute"
                style={PROJECT_POSITION_STYLES[i].thumb ?? {}}
              >
                <ProjectThumb key={project.id} project={project} />
              </motion.div>
            ))}
          </motion.menu>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {slug !== undefined && (
          <motion.div
            variants={detailContainer}
            exit={"closed"}
            initial={hasProjectOpen ? "open" : "closed"}
            animate={hasProjectOpen ? "open" : "closed"}
            className="z-10 mx-rem-1/2 mt-rem-1/2 overflow-hidden"
          >
            <ProjectDetail slug={slug} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
