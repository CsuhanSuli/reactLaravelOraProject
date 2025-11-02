import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import comp from "./components/comp";
function App() {
  const [data, setData] = useState(0);
  function fetching() {
    fetch("http://127.0.0.1:8000/api/allCompany")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }
  function writeJson() {
    data.forEach((element) => {
      <comp
        h1={element.companyName}
        p1={element.phoneNumber}
        p2={element.email}
      ></comp>;
    });
  }
  return (
    <>
      {fetching()}
      {data ? <div>{writeJson()}</div> : <div></div>}
    </>
  );
}

export default App;
