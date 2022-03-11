import { useSearchParams } from "react-router-dom";

function Home() {
  const [params] = useSearchParams();

  let id = params.get("id") ?? "";

  return (
    <>
      <h1>Home页面 - {id}</h1>
    </>
  );
}

export default Home;
