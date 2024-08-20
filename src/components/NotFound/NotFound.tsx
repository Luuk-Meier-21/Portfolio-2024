import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

interface NotFoundProps {}

function NotFound({}: NotFoundProps) {
  const error = useRouteError();

  console.log(error);

  return (
    <div data-component-name="NotFound" className="text-md">
      <h1 className="mb-[1em]">Oops, deze pagina bestaat niet.</h1>
      <Link
        to="/"
        className="italic underline decoration-from-font underline-offset-[.15em] hover:no-underline"
      >
        Terug naar home
      </Link>
    </div>
  );
}
export default NotFound;
