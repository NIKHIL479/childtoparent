import React,{useState} from 'react'
import Home from './Home'
export const App = () => {
  const [data,setData]=useState()

  return (
    <div>

      <h1>{data}</h1>
 <Home setData={setData}/>


    </div>
  )
}
export default App
