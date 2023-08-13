// Admin Page
import Dashbord from "./Admin/Dashboard";
import Profile from "./Admin/Profile";
import Operations from "./Admin/Operations";

// Home Page
import Login from "./Home/Login";
import Users from "./Admin/Users";
import SendReceive from "./Admin/SendReceive";
import Pagenotfound from "./Admin/PageNotFound";

export const AdminRouter = [
  {
    path: "/admin",
    component: Dashbord,
    exact: true,
  },
  {
    path: "/",
    component: Dashbord,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashbord,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
  }, 
  {
    path: "/operations",
    component: Operations,
    exact: true,
  },
  {
    path: "/users",
    component: Users,
    exact: true,
  },
  {
    path: "/send-receive",
    component: SendReceive,
    exact: true,
  },
  {
    path: "*",
    component: Pagenotfound,
    exact: true,
  },
];

export const MainRouter = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];
