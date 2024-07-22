import {useQuery} from "urql";
import {ProjectsListQuery} from "../queries/project";

export function TestClient() {
  const [result] = useQuery({
    query: ProjectsListQuery,
  });

  const {data, fetching, error} = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {data!.projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
