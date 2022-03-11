import { useState, createContext, useContext } from "react";

const NumContext = createContext();

const Child = () => {
  const { num, setNum } = useContext(NumContext);

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(456)}>点我</button>
    </>
  );
};

const Father = () => <Child />;

function App3() {
  const [num, setNum] = useState(123);

  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  );
}

export default App3;
