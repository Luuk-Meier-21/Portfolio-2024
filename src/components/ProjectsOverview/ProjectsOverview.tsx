import { useQuery } from "urql";
import { ProjectsListQuery } from "../../queries/project";
import { ProjectThumb, ProjectThumbData } from "../ProjectThumb/ProjectThumb";
import { AnimatePresence, motion, MotionStyle, Variants } from "framer-motion";
import { ProjectDetail } from "../ProjectDetail/ProjectDetail";
import { useParams } from "react-router";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Bracket from "../Bracket/Bracket";

export interface ProjectMotionStyle {
  thumb: MotionStyle;
  detail: MotionStyle;
}

// const PROJECT_POSITION_STYLES: ProjectMotionStyle[] = [
//   {
//     thumb: {
//       left: "0%",
//     },
//     detail: {
//       right: "20%",
//     },
//   },
//   {
//     thumb: {
//       left: "15%",
//       bottom: "10%",
//     },
//     detail: {},
//   },
//   {
//     thumb: {
//       left: "32%",
//       top: "20%",
//     },
//     detail: {},
//   },
//   {
//     thumb: {
//       right: "40%",
//       bottom: "40%",
//     },
//     detail: {},
//   },
//   {
//     thumb: {
//       right: "20%",
//       top: "10%",
//     },
//     detail: {},
//   },
//   {
//     thumb: {
//       right: "0%",
//       bottom: "20%",
//     },
//     detail: {},
//   },
// ];

interface ProjectOverviewProps {}

export function ProjectOverview({}: ProjectOverviewProps) {
  const { slug } = useParams();
  const [result] = useQuery({
    query: ProjectsListQuery,
  });

  const { data, fetching, error } = result;

  const projects = data?.projects_b;

  if (fetching) return <p className="p-rem-1/2">Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    projects && (
      <main className="row-span-2 mb-auto flex flex-wrap items-start justify-start gap-x-[1ch]">
        <h1 className="flex min-w-[25%] text-lg sm:block lg:min-w-[20%] lg:text-xl">
          Projecten:
        </h1>
        {projects.map((project) => (
          <div className="whitespace-nowrap text-lg lg:text-xl">
            <Link to={`/${project.slug}`}>
              <span className="italic">{project.name}</span>{" "}
            </Link>
            <Bracket> 0 </Bracket>
          </div>
        ))}
      </main>
    )
  );
}
