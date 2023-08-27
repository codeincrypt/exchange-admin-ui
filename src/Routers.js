// Admin Page
import Dashbord from "./Admin/Dashboard";
import Profile from "./Admin/Profile";
import Operations from "./Admin/Operations";

// Home Page
import Login from "./Home/Login";
import Users from "./Admin/Users";
import SendReceive from "./Admin/SendReceive";
import Pagenotfound from "./Admin/PageNotFound";
import BuySell from "./Admin/BuySell";
import Fiat from "./Admin/Fiat";
import ChangePassword from "./Admin/Setting/ChangePassword";
import CryptoCoins from "./Admin/Setting/CryptoCoins";
import TwoFA from "./Admin/Setting/TwoFA";
import AdminSetting from "./Admin/Setting/AdminSetting";
import CryptoBalance from "./Admin/CryptoBalance";
import UsersView from "./Admin/UsersView";
import Paymenthistory from "./Admin/Paymenthistory";
import CryptoBalanceChart from "./Admin/CryptoBalanceChart";

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
    path: "/users/:id",
    component: UsersView,
    exact: true,
  },
  {
    path: "/send-receive",
    component: SendReceive,
    exact: true,
  },
  {
    path: "/payment-history",
    component: Paymenthistory,
    exact: true,
  },
  {
    path: "/buy-sell",
    component: BuySell,
    exact: true,
  },
  {
    path: "/crypto-balance",
    component: CryptoBalance,
    exact: true,
  },
  {
    path: "/crypto-balance/:id",
    component: CryptoBalanceChart,
    exact: true,
  },
  {
    path: "/fiat",
    component: Fiat,
    exact: true,
  },
  {
    path: "/setting",
    component: CryptoCoins,
    exact: true,
  },
  {
    path: "/setting/crypto-coins",
    component: CryptoCoins,
    exact: true,
  },
  {
    path: "/setting/admin",
    component: AdminSetting,
    exact: true,
  },
  {
    path: "/setting/change-password",
    component: ChangePassword,
    exact: true,
  },
  {
    path: "/setting/two-factor-authentication",
    component: TwoFA,
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
