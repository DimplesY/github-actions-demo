import App from "../App";
import Home from "../views/Home";
import Detail from "../views/Detail";
import List from "../views/List";
import Container from "../views/ToList";
import NotFund from "../views/NotFund";

const routers = [
  {
    path: "/",
    element: <App />,
    index: false,
    children: [
      {
        path: "",
        element: <Container />,
        index: true,
        children: [],
      },
      {
        path: "/home",
        element: <Home />,
        index: false,
        children: [],
      },
      {
        path: "/detail",
        element: <Detail />,
        index: false,
        children: [],
      },
      {
        path: "/list/:id",
        element: <List />,
        index: false,
        children: [],
      },
    ],
  },
  {
    path: "*",
    element: <NotFund />,
    index: false,
    children: [],
  },
];

export default routers;
