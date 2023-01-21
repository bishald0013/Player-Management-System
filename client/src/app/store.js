import {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import { managerAuthApi } from "../service/managerAuth"

export const store = configureStore({
    reducer: {
        [managerAuthApi.reducerPath]:managerAuthApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(managerAuthApi.middleware),
})

setupListeners(store.dispatch)