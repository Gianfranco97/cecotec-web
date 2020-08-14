import Home from "./Home";
import Products from "./Products";
import Clients from "./Clients";

const adminRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
    isPrivate: true,
    name: "Admin",
  },
  {
    path: "/products",
    isPrivate: true,
    component: Products,
    name: "Products",
  },
  {
    path: "/clients",
    isPrivate: true,
    component: Clients,
    name: "Clients",
  },
];

export default adminRoutes;
