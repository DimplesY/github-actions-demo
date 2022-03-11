import { memo, useCallback, useMemo, useState } from "react";
import { connect } from "react-redux";

const Child = memo((props) => (
  <>
    {console.log("重新渲染了")}
    <h1>子组件</h1>
    <button onClick={props.doSth2}>点我</button>
  </>
));

function App(props) {
  const [num, setNum] = useState(123);

  const doSth = useCallback(() => {
    setNum((num) => num + 1);
  }, []);

  const doSth2 = useMemo(() => () => setNum((num) => num + 1), []);
  console.log(props);
  return (
    <>
      <h1>{num}</h1>
      <h2>{props.num}</h2>
      <button onClick={props.add}>点我store数据+1</button>
      <Child doSth={doSth} doSth2={doSth2} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: "add" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
