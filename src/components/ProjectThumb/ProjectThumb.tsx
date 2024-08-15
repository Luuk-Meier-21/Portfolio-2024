import { ReactNode, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { ProjectsListQueryQuery } from "../../gql/graphql";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import DynamicImage from "../DynamicImage/DynamicImage";
import {
  DEFAULT_DURATION_MS,
  DEFAULT_DURATION_SEC,
  FADE_TRANSITION,
  fadeTransition,
} from "../../utils/animation";

export type ProjectThumbData = ProjectsListQueryQuery["projects_b"][0];
export type ProjectImageData = ProjectThumbData["images"][0];

interface Props {
  project: ProjectThumbData;
  children?: ReactNode;
  className?: string;
}

export function ProjectThumb({ project, children, className }: Props) {
  const { slug } = useParams();

  const ref = useRef<HTMLHeadingElement>(null);

  const [thumbIndex, setThumbIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const open = slug === project.slug;
  const classes = clsx("flex w-full text-lg lg:text-xl", className);

  const textClasses = clsx(
    "italic decoration-from-font mr-[.5em] hover:underline underline-offset-[.15em]",
    {
      underline: open,
    },
  );

  const imagesLength = project.images.length;
  const thumbImage = project.images[thumbIndex] ?? null;

  const scrollInView = () => {
    setTimeout(() => {
      window.scrollTo({
        top: ref.current?.offsetTop,
        behavior: "smooth",
      });
    }, DEFAULT_DURATION_MS * 0.75);
  };

  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        setThumbIndex(0);
      }, 100);
    }

    // scrollInView();
  }, [open, project]);

  useEffect(() => {
    const id = setTimeout(() => {
      setThumbIndex(thumbIndex < imagesLength - 1 ? thumbIndex + 1 : 0);
    }, 500);

    if (hover === false) {
      clearTimeout(id);
      setThumbIndex(0);
    }

    return () => {
      clearInterval(id);
    };
  }, [hover, thumbIndex, imagesLength]);

  return (
    <li key={project.id} className={classes}>
      <Link
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        to={open ? "/" : `/${project.slug}`}
        className={textClasses}
      >
        <h2 ref={ref}>{project.name}</h2>{" "}
      </Link>
      <div className="flex">
        <span className="inline-flex">{"{"}</span>
        <motion.figure className="relative h-full w-[1.5em]">
          <AnimatePresence>
            {!open && thumbImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fadeTransition({
                  duration: DEFAULT_DURATION_SEC * 0.25,
                })}
                className="absolute left-[50%] top-[.2em] w-[1em] translate-x-[-50%]"
              >
                <DynamicImage
                  src={thumbImage.url}
                  alt={thumbImage.fileName}
                  width={thumbImage.width ?? 0}
                  height={thumbImage.height ?? 0}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.figure>

        {children}
        <span className="inline-flex self-end">{"},"}</span>
      </div>
    </li>
  );
}
