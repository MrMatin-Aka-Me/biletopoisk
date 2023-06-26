import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { filterReducer } from "./slices/filter";
import { filmsReducer } from "./slices/films";
import { filmsAPI } from "./services/films/films";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        films: filmsReducer,
        [filmsAPI.reducerPath]: filmsAPI.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch