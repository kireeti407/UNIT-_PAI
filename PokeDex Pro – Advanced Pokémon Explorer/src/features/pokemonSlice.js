import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
export const Pokemon=createAsyncThunk("Project/details",async()=>{
    let res=await axios("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    return res.data.results
})

export const Pokemondetailes=createAsyncThunk("Pokemon/details",async(url)=>{
    
    let res=await axios(url)
    console.log(res.data)
    return res.data

})
const ProjectSlice= createSlice({
    name:"Pokemon",
    initialState:{data:[],loading:false,error:null,pokemon:[]},
    extraReducers:(builder)=>{
        builder
            .addCase(Pokemon.fulfilled,(state,action)=>{
                state.loading=false

                state.data=action.payload
            })
            .addCase(Pokemon.pending,(state)=>{
                state.loading=true
            })
            .addCase(Pokemon.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
            })

            .addCase(Pokemondetailes.fulfilled,(state,action)=>{
                state.loading=false
                state.pokemon=[action.payload]
            })
            .addCase(Pokemondetailes.pending,(state)=>{
                state.loading=true
            })
            .addCase(Pokemondetailes.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
            })
    }
})
export default ProjectSlice.reducer