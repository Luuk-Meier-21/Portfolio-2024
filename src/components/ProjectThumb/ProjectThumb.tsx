import { ReactNode, useEffect, useRef, useState } from "react";
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
import DynamicImage from "../DynamicImage/DynamicImage";

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
  const classes = clsx("flex h-full text-lg lg:text-xl", {
    // "self-end": index > openIndex,
  });

  const textClasses = clsx(
    "italic decoration-from-font mr-[.5em] hover:underline underline-offset-[.15em]",
    {
      underline: open,
    },
  );

  const imagesLength = project.images.length;
  const thumbImage = project.images[thumbIndex] ?? null;

  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        setThumbIndex(0);
      }, 100);

      setTimeout(() => {
        window.scrollTo({
          top: ref.current?.offsetTop,
          behavior: "smooth",
        });
      }, 200);
    }
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
    <section key={project.id} className={classes}>
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
        <figure className="relative h-full w-[1.5em]">
          <AnimatePresence>
            {!open && thumbImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-[50%] top-[50%] w-[1em] translate-x-[-50%] translate-y-[-50%] pt-[10%]"
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
        </figure>

        {children}
        <span className="inline-flex self-end">{"},"}</span>
      </div>
    </section>
  );
}
