import { useDispatch, useSelector } from "react-redux"
import { Pokemon, Pokemondetailes } from "../features/pokemonSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loader"
import Error from "../components/ErrorBanner"

export default function DashBoard(){
    const {data,loading,error}=useSelector((state)=>state.Project)
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Pokemon())
        
    },[])
    

    if(loading) return <Loading/>
    if(error) return <Error/>
    return(
        <> 
            <h3>DashBoard to Pokemon Explorer</h3>
            <button onClick={()=>{incre()}}>sort A-Z</button><button>sort Z-A </button>
            {
                data.map((e)=>(<div>
                    <p><strong>Name: </strong>{e.name}</p>
                    <button onClick={()=>{
                        dispatch(Pokemondetailes(e.url))
                        Navigate("/detailes")
                    }
                        }>Detaile</button>
                </div>))
            }
        </>
    )
}