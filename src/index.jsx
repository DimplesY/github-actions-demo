import ReactDOM from "react-dom";
// import App from "./hook/App4";
// import { Provider } from "react-redux";
// import store from "./store";
import BaseRouter from "./router";

ReactDOM.render(<BaseRouter />, document.querySelector("#root"));
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));

// setTimeout(() => {
//   ReactDOM.render(<input />, document.querySelector("#root"));
// }, 1000);
