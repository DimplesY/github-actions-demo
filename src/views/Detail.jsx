import { useLocation } from "react-router-dom";

function Detail() {
  const { state } = useLocation();

  return (
    <>
      <h1>Detail页面 - {state?.name}</h1>
    </>
  );
}

export default Detail;
