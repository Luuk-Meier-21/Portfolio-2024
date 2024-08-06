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

  // const open = slug === project.slug;

  // const year = new Date(project.date).getFullYear();

  const classes = clsx("pr-5", className);

  return (
    <id
  );
}
