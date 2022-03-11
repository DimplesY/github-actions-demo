import { useState } from "react";

const List = (props) => (
  <ul>
    {props.list.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Container = () => {
  const [list, setList] = useState([]);

  const [item, setItem] = useState("");

  const InputChange = (e) => setItem(e.target.value);

  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      setList([...list, item]);
      setItem("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={item}
        onChange={InputChange}
        onKeyPress={handleKeyPress}
      />
      <List list={list} />
    </>
  );
};

export default Container;
