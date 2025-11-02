import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CompName from "./components/CompName.jsx";
function App() {
  const [data, setData] = useState(null);
  function GetAllData() {
    fetch("http://127.0.0.1:8000/api/")
      .then((respone) => respone.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }
  function Writejson() {
    return;
    <>
      {data.map((row) => (
        <CompName
          teacherName={row.teacherName}
          specialization={row.specialization}
          location={row.location}
          classTime={row.classTime}
          humanCount={row.humanCount}
        ></CompName>
      ))}
    </>;
  }
  return (
    <>
      <div>
        <h1>nyiltnap</h1>
        <GetAllData></GetAllData>
        <Writejson></Writejson>
      </div>
    </>
  );
}

export default App;
