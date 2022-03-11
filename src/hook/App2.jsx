import { useState, createContext } from "react";

const NumContext = createContext();

const Child = () => {
  return (
    <NumContext.Consumer>
      {({ num, setNum }) => (
        <>
          <h1>{num}</h1>
          <button onClick={() => setNum(456)}>点我</button>
        </>
      )}
    </NumContext.Consumer>
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
