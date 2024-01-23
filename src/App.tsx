import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import MainLayout from "./layouts/MainLayout";
import { AppProvider } from "./services/Context/AppContext";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const SingleProject = lazy(() => import("./pages/SingleProject/SingleProject"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/projects/:type/:path",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <SingleProject />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
