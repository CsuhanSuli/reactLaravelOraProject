import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import symptom from './components/symptom'

function App() {
  const [data,setData]= useState(null);
function getAllData()
{
  fetch('http://127.0.0.1:8000/api/')
  .then((respone)=>respone.json())
  .then((json)=>setData(json))
  .catch((error)=>console.error(error))
}
function writeJson()
{
  return(
    <>
    {
      data.map((elemet)=>
        {
          <symptom name={elemet.symptomName} p1={element.symptomDescription} p2={elemet.whenDevelop} p3={elemet.bornYear}></symptom>
        })
    }
    </>
  )
}




  return (
    <>
      {getAllData()}
      {data ? <div>{writeJson()}</div> : <div>Adatok letöltése...</div>}
    </>
  )
}

export default App
