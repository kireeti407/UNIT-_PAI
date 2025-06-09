import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export default function Detaile(){
    const data2=useSelector((state)=>state.Project.pokemon)
    const Navigate=useNavigate()
    return(
        <>
            {
               data2 && data2.map((e)=>(
                    <div>
                        <img src={e.sprites.back_default} alt="" />
                        <p><strong>Name</strong>:{e.name}</p>
                        <p><strong>weight</strong>:{e.weight}</p>
                        <p><strong>Base Experince:</strong>{e.base_experience}</p>
                    </div>
                ))
            }
            <button onClick={()=>Navigate("/")}>Back</button>
        </>
    )
}