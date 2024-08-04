import { ReactNode } from "react";
import { useParams } from "react-router";
import { ProjectsListQueryQuery } from "../../gql/graphql";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  MotionStyle,
  Variant,
  Variants,
} from "framer-motion";
import clsx from "clsx";

export type ProjectThumbData = ProjectsListQueryQuery["projects"][0];

interface Props {
  project: ProjectThumbData;
  // children?: ReactNode;
  className?: string;
  style?: MotionStyle;
}

export function ProjectThumb({ project, className, style }: Props) {
  const { slug } = useParams();

  const open = slug === project.slug;

  const year = new Date(project.date).getFullYear();

  const articleVariants: Variants = {
    closed: {
      opacity: 0.3,
      zIndex: -10,
    },
    hover: {
      opacity: 1,
      zIndex: 100,
    },
    open: {
      opacity: 1,
      zIndex: 100,
    },
  };

  const classes = clsx("pr-5", className);

  return (
    <>
      <motion.article
        className={classes}
        // variants={articleVariants}
        // whileHover={"hover"}
        // // initial={open ? "open" : "closed"}
        // // animate={open ? "open" : "closed"}
        style={{ ...style }}
      >
        <Link
          className="flex flex-col gap-rem-1/2"
          to={`/${project.slug}`}
          key={project.id}
        >
          <div className="group flex flex-col">
            <h2 className="group-hover:underline">{project.name}</h2>
            {/* {project.categories && (
              <ul className="inline italic [&>*:not(:last-child)]:after:content-[',_']">
                {project.categories.map(
                  (category) =>
                    category.label &&
                    category.slug && (
                      <li key={category.slug} className="inline">
                        {category.label}
                      </li>
                    ),
                )}
              </ul>
            )} */}
            {year && (
              <time className="italic" dateTime={`${year}`}>
                {year}
              </time>
            )}
          </div>
          {/* <motion.img
          className="aspect-[4/3] w-full object-cover"
          src={project.thumb.url}
          alt={project.thumb.fileName}
        /> */}
        </Link>
        {/* <motion.div
          className="mt-rem-1 overflow-hidden"
          variants={dropdownVariants}
          initial={openWithChildren ? "open" : "closed"}
          animate={openWithChildren ? "open" : "closed"}
        >
          {children}
        </motion.div> */}
        {/* <AnimatePresence>
        {!open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            className="pointer-events-none absolute inset-[-30px]"
          />
        )}
      </AnimatePresence> */}
      </motion.article>
    </>
  );
}
