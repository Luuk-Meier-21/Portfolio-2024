import {useQuery} from "urql";
import {ProjectQuery} from "../queries/project";

interface ProjectDetailProps {
  id: string;
}

export function ProjectDetail({id}: ProjectDetailProps) {
  const [result] = useQuery({
    query: ProjectQuery,
    variables: {
      id: id,
    },
  });

  const {data, fetching, error} = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {data?.project?.name}
      {data?.project?.slug}
    </div>
  );
}
