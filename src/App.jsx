import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

// const arr = ["Java", "JavaScript", "Python"];

// const elArr = [];

// class App extends Component {
//   state = {};
//   render() {
//     arr.forEach((item, index) => {
//       elArr.push(<li key={index}>{item}</li>);
//     });

//     return (
//       <>
//         <h1>你好</h1>
//         <label htmlFor="username">用户名:</label>
//         <input type="text" id="username" style={{ height: 20 + "px" }} />
//         <ul>{elArr}</ul>
//       </>
//     );
//   }
// }

function App() {
  // const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  function toDetail() {
    navigate("/detail", {
      state: {
        name: "张三",
      },
    });
  }

  return (
    <>
      <ul>
        <li>
          <Link to={"/?id=123"}> 首页</Link>
        </li>
        <li>
          <Link to={"/detail"}> 详情</Link>
        </li>
        <li>
          <Link to={"/list/123"}> 列表</Link>
        </li>
      </ul>
      <button onClick={toDetail}>点我跳转到详情页</button>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
