import { useEffect, useState } from 'react'

import './App.css'
import AddSnack from './components/addsnack'
import Displaysnack from './components/displaySnack'

function App() {
  const [snackdata,setSnackdata]=useState()
  async function fetchdata(){
    let res=await fetch("https://data-46361-default-rtdb.asia-southeast1.firebasedatabase.app/Snack.json")
    let data=await res.json()
    let d=Object.entries(data).map(([id,e])=>{
      return {id,...e}
    })
    setSnackdata(d)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  if(!snackdata) return <h1>Loading...</h1>
  return (
    <>
      <Displaysnack data={snackdata}/>
      <AddSnack />
    </>
  )
}

export default App
