import Home from "./Home";
import Products from "./Products";

const adminRoutes = [
  {
    path: "/admin",
    exact: true,
    component: Home,
    name: "Admin",
  },
  {
    path: "/products",
    component: Products,
    name: "Products",
  },
];

export default adminRoutes;
