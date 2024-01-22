import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import MainLayout from "./layouts/MainLayout";
import SingleProject from "./pages/SingleProject/SingleProject";
import { AppProvider } from "./services/Context/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/projects/:type/:path",
          element: <SingleProject />
        }
      ]
    }
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
