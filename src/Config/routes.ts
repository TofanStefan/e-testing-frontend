import IRoute from "../interfaces/route";
import App from "../App";
import Login from "../Views/login.view";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: App,
    exact: true,
  },
  //login page
  {
    path: "/login",
    name: "Login Page",
    component: Login,
    exact: true,
  },
];

export default routes;
