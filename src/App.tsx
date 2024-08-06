import {
  cacheExchange,
  Client,
  fetchExchange,
  Provider as GqlProvider,
} from "urql";
import { Outlet, RouterProvider, useParams } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorInfo } from "react";
import { ProjectOverview } from "./components/ProjectsOverview/ProjectsOverview";

// function ProjectDetailLoader() {
//   const { slug } = useParams();

//   if (slug === undefined) {
//     return null;
//   }

//   return <ProjectDetail slug={slug} />;
// }

const client = new Client({
  url: "https://eu-central-1.cdn.hygraph.com/content/cl7rij5cj669q01uhae8r9wkh/master",
  exchanges: [cacheExchange, fetchExchange],
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <ProjectOverview />,
        children: [
          {
            path: "/:slug",
          },
        ],
      },
    ],
  },
]);

const onError = (error: Error, info: ErrorInfo) => {
  console.log("🚀 ~ onError ~ message:", error, info);
};

function App() {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong...</div>}
      onError={onError}
    >
      <GqlProvider value={client}>
        <RouterProvider router={router} />
      </GqlProvider>
    </ErrorBoundary>
  );
}

export default App;
