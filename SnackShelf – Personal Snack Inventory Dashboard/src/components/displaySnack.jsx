export default function Displaysnack({data}){
    return (
        <>
            <h1>available items</h1>
            <div style={{display:"flex", gap:"5px"}}>
                
                {data.map((e)=>(
                    <div style={{border:"1px solid white",padding:"10px"}}>
                        <p><strong>title: </strong>{e.title}</p>
                        <p><strong>category: </strong>{e.category}</p>
                        <p><strong>price: </strong>{e.price}</p>
                        <p><strong>rating: </strong>{e.rating}</p>
                    </div>
                ))}
            </div>

        </>
    )
}