import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from "./config";


/**
 * 
 * @param {router} router 
 */
function  generateRouter(router) {

  return router.map(item => item.index
    ? <Route index element={item.element} /> 
    : <Route path={item.path} element={item.element}>
        {
          item.children.length !== 0 && generateRouter(item.children)
        }
      </Route>
  )
}

const BaseRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      {
        generateRouter(routers)
      }
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
