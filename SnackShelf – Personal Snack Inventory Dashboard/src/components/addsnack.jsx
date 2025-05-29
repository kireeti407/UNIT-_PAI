
import { useState } from "react"
export default function AddSnack(){
     const [snack, setSnack] = useState({
        title: "",
        category: "",
        price: "",
        rating:""
      })
    function change(e){
        let name=e.target.name
        let value=e.target.value
        setSnack({...snack,[name]:value})
        

    }
    async function adds(){
        let res=await fetch("https://data-46361-default-rtdb.asia-southeast1.firebasedatabase.app/Snack.json",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(snack)
        })
        let data=await res.json()
        
    }
    return  (
        <>
        <h1>Add snacks</h1>
            <input type="text" placeholder="title" name="title" onChange={change}/><br />
            <input type="text" placeholder="category" name="category" onChange={change}/><br />
            <input type="text" placeholder="price" name="price" onChange={change}/><br />
            <input type="text" placeholder="rating" name="rating" onChange={change}/><br /><br />
            <button onClick={adds}>add</button>
        </>
    )
}