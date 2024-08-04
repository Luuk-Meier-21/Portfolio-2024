import { useQuery } from "urql";
import { ProjectQuery } from "../../queries/project";
import { ProjectQueryQuery } from "../../gql/graphql";
import { isNullableValue } from "../../utils/gql";
import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import { useParams } from "react-router";
import clsx from "clsx";

export type ProjectDetailData = Exclude<
  ProjectQueryQuery["project"],
  null | undefined
>;
export type ProjectDescriptionBlock = ProjectDetailData["description"][0];

interface ProjectDetailProps {
  slug: string;
  className?: string;
  style?: MotionStyle;
}

export function ProjectDetail({ slug, className }: ProjectDetailProps) {
  const [result] = useQuery({
    query: ProjectQuery,
    variables: {
      slug,
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  if (isNullableValue(data?.project)) {
    throw Error("No project data");
  }

  const project: ProjectDetailData = data!.project!;
  const classes = clsx(
    "flex w-full flex-col pointer-events-auto gap-y-rem-1 h-[2000px] bg-red-400",
    className,
  );

  const renderDescription = (
    block: ProjectDescriptionBlock,
  ): JSX.Element | undefined => {
    switch (block.__typename) {
      case "Link":
        return <a href={block.url}>{block.label}</a>;
      case "Paragraph":
        return <p>{block.content?.text}</p>;
    }
  };

  return (
    <article className={classes}>
      <figure className="flex flex-col gap-y-rem-1">
        {project.images.map((image) => (
          <img
            className="aspect-[4/3] w-full bg-white/5 object-cover"
            src={image.url}
            alt={image.fileName}
          />
        ))}
      </figure>
      <article>{project.description.map(renderDescription)}</article>
    </article>
  );
}
