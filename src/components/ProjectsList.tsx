import {useQuery} from "urql";
import {ProjectsListQuery} from "../queries/project";

interface Props {
  onClick: (projectId: string) => void;
}

export function TestClient({onClick}: Props) {
  const [result] = useQuery({
    query: ProjectsListQuery,
  });

  const {data, fetching, error} = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {data!.projects.map((project) => (
        <button onClick={() => onClick(project.id)} key={project.id}>
          {project.name}
        </button>
      ))}
    </div>
  );
}
