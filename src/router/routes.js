import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "./../pages/Login";

const privateRoutes = [
  { path: "/about", element: <About />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostIdPage />, exact: true },
];

const publicRoutes = [{ path: "/login", element: <Login />, exact: true }];

export { privateRoutes, publicRoutes };
