import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Dashboard } from "../Pages";

export const indexRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Dashboard />
      }
    ]
  }
])
