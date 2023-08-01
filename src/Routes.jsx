import {
    createBrowserRouter,
    RouterProvider,
    // redirect
  } from "react-router-dom";
import Login from "./pages/login"
import Register from "./pages/register"
import ErrorPage from "./pages/errorpage"
import Neo4jDataVisualization from "./pages/home"

function Routes() {
  const router = createBrowserRouter([
    {
      path: '',
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'login',
          // loader: LoginLoader,
          children: [
            {
              path: '',
              element: <Login />
            },
            {
              path: 'register',
              element: <Register />
            }
          ]
        },
        {
          path: 'home',
          children: [
            {
              path: '',
              element:<Neo4jDataVisualization/>
            }
          ]
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default Routes;