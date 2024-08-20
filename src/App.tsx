import {
  cacheExchange,
  Client,
  fetchExchange,
  Provider as GqlProvider,
} from "urql";
import { Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorInfo } from "react";
import { ProjectOverview } from "./components/ProjectsOverview/ProjectsOverview";
import NotFound from "./components/NotFound/NotFound";

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
    errorElement: (
      <Layout>
        <NotFound />
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
        errorElement: (
          <Layout>
            <NotFound />
          </Layout>
        ),
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
        <RouterProvider
          fallbackElement={<div>router error</div>}
          router={router}
        />
      </GqlProvider>
    </ErrorBoundary>
  );
}

export default App;
