import { configureStore } from "@reduxjs/toolkit";
import PokemonFeature from "../features/pokemonSlice"
import logger from "redux-logger"
export const store= configureStore({
    reducer:{
        Project:PokemonFeature
    },
    middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
    }
})