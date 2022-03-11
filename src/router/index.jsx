import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Home from "../views/Home";
import Detail from "../views/Detail";
import List from "../views/List";
import Container from "../views/ToList";
import NotFund from "../views/NotFund";

const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Container />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list/:id" element={<List />} />
      </Route>
      <Route path="*" element={<NotFund />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
