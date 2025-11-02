import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./mainLayout.jsx";
import Comp from "./comp.jsx";
function App() {
  const [data, setData] = useState(null);
  function GetALlData() {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }
  function Writejson() {
    return (
      <>
        {data.map((element) => (
          <Comp
            name={element.name}
            authour={element.authour}
            releaseYear={element.releaseYear}
            wordCount={element.wordCount}
          ></Comp>
        ))}
      </>
    );
  }
  return (
    <>
      <Layout>
        {GetALlData()}
        {data ? <div class="container">{Writejson()}</div> : <div>Adatok letöltse</div>}
      </Layout>
    </>
  );
}

export default App;
