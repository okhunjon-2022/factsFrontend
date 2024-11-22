import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import SingleBlog from "../pages/SingleBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../pages/admin/adminLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AddPost from "../pages/admin/post/AddPost";
import ManagePost from "../pages/admin/post/ManagePost";
import ManageUser from "../pages/admin/user/ManageUser";
import PrivateRouter from "./PrivateRouter";
import UpdatePost from "../pages/admin/post/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRouter>
            <AdminLayout />
          </PrivateRouter>
        ),
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "add-new-post",
            element: <AddPost />,
          },
          {
            path: "manage-items",
            element: <ManagePost />,
          },
          {
            path: "users",
            element: <ManageUser />,
          },
          {
            path: "update-items/:id",
            element: <UpdatePost />,
          },
        ],
      },
    ],
  },
]);

export default router;
