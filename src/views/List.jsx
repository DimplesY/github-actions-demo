import { useParams } from "react-router-dom";

function List() {
  const { id } = useParams();
  return (
    <>
      <h1>List页面 - {id}</h1>
    </>
  );
}

export default List;
