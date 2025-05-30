import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/SignIn/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Loading from "../Pages/Shared/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/jobs/:id',
        Component: JobDetails,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: Login
      }
    ],
  },
]);

export default router;
