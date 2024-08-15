import { useQuery } from "urql";
import { ProjectQueryQuery } from "../../gql/graphql";
import { MotionStyle } from "framer-motion";
import clsx from "clsx";
import InlineCollapse from "../InlineCollapse/InlineCollapse";
import InlineList from "../InlineList/InlineList";
import DynamicImage from "../DynamicImage/DynamicImage";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Collapse from "../Collapse/Collapse";
import { projectQuery } from "../../queries/project";

export type ProjectDetailData = Exclude<
  ProjectQueryQuery["project_b"],
  null | undefined
>;
export type ProjectDescriptionBlock = ProjectDetailData["description"][0];

interface ProjectDetailProps {
  slug: string;
  className?: string;
  style?: MotionStyle;
}

export function ProjectDetail({ slug, className }: ProjectDetailProps) {
  const { slug: currentSlug } = useParams();

  const [result] = useQuery({
    query: projectQuery,
    variables: {
      slug,
    },
  });

  const { data, fetching, error } = result;

  const project = data?.project_b;
  const open = currentSlug === project?.slug ?? false;

  const [expandedDescription, setExpandedDescription] = useState(false);

  useEffect(() => {
    setExpandedDescription(false);
  }, [open]);

  useEffect(() => {
    if (open && project?.name) {
      document.title = `Luuk Meier - ${project.name}`;
    } else {
      document.title = `Luuk Meier - Portfolio`;
    }
  }, [project, open]);

  // if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  // const classes = clsx("", className);

  const renderDescription = (
    block: ProjectDescriptionBlock,
  ): JSX.Element | undefined => {
    switch (block.__typename) {
      case "Link":
        return <a href={block.url}>{block.label}</a>;
      case "Paragraph":
        return <p className="mb-[1em] text-md">{block.content?.text}</p>;
    }
  };

  const renderTableItem = (label: string, content: JSX.Element) => (
    <li className="col-start-1 -col-end-1 grid grid-cols-subgrid">
      <div className="col-span-1 m-0 flex">{label}:</div>
      <div className="mb col-start-2 -col-end-1 flex">{content}</div>
    </li>
  );

  const isOpen = (project && open) ?? false;

  const year = project?.date
    ? new Date(project?.date).getFullYear()
    : undefined;

  return (
    project && (
      <InlineCollapse open={isOpen} className="pointer-events-none mt-[1em]">
        <article className="pointer-events-auto mb-[2em] mt-[1em] w-full">
          <figure className="grid grid-cols-1 gap-x-rem-1/2 gap-y-rem-1 md:grid-cols-2">
            {project.images.map((image) => (
              <DynamicImage
                key={image.id}
                src={image.url}
                alt={image.fileName}
                width={image.width ?? 0}
                height={image.height ?? 0}
              />
            ))}
          </figure>
          <div className="mt-rem-1/2 grid min-h-[var(--row-height)] auto-rows-min grid-cols-2 gap-rem-1/2 md:grid-cols-6">
            <ul className="col-span-2 mb-[1em] grid auto-rows-min grid-cols-subgrid gap-y-rem-1/4 text-md md:col-span-3 md:mb-0">
              {project.categories.length > 0 &&
                renderTableItem(
                  "Disciplines",
                  <InlineList>
                    {project.categories.map((category) => (
                      <li className="mb-0" key={category.id}>
                        {category.label}
                      </li>
                    ))}
                  </InlineList>,
                )}
              {year &&
                renderTableItem(
                  "Jaar",
                  <time dateTime={project.date}>{year}</time>,
                )}
              {project.info.map(
                (info) =>
                  info.label &&
                  info.link &&
                  renderTableItem(
                    info.label,
                    <a
                      key={info.id}
                      className="italic underline decoration-from-font underline-offset-[.15em] hover:no-underline"
                      target="_blank"
                      href={info.link.url}
                    >
                      {info.link.label}
                    </a>,
                  ),
              )}
            </ul>
            {project?.description[0] && (
              <div className="col-span-2 flex flex-col items-start md:col-span-3">
                {project.description.length > 0 &&
                  renderDescription(project.description[0])}

                {project.description.slice(1).length > 0 && (
                  <Collapse
                    className="flex flex-col overflow-hidden"
                    open={expandedDescription}
                  >
                    {project.description.slice(1).map(renderDescription)}
                  </Collapse>
                )}
                {project.description.slice(1).length > 0 && (
                  <button
                    className="text-md hover:no-underline"
                    onClick={() => setExpandedDescription(!expandedDescription)}
                  >
                    <span className="mr-rem-1/2 italic underline decoration-from-font underline-offset-[.15em] hover:no-underline">
                      {expandedDescription ? "Lees minder" : "Lees meer"}
                    </span>
                    {expandedDescription ? <>&#8210;</> : <>+</>}
                  </button>
                )}
              </div>
            )}
          </div>
        </article>
      </InlineCollapse>
    )
  );
}
