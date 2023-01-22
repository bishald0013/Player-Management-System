import {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import { managerAuthApi } from "../service/managerAuth"
import { teamApi } from "../service/teamApi"

export const store = configureStore({
    reducer: {
        [managerAuthApi.reducerPath]:managerAuthApi.reducer,
        [teamApi.reducerPath]:teamApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(managerAuthApi.middleware, teamApi.middleware),
        
})

setupListeners(store.dispatch)