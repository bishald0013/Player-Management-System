import {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import { managerAuthApi } from "../service/managerAuth"
import { teamApi } from "../service/teamApi"
import { playerApi } from "../service/playerApi"

export const store = configureStore({
    reducer: {
        [managerAuthApi.reducerPath]:managerAuthApi.reducer,
        [teamApi.reducerPath]:teamApi.reducer,
        [playerApi.reducerPath]:playerApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            managerAuthApi.middleware, 
            teamApi.middleware,
            playerApi.middleware
            ),
})

setupListeners(store.dispatch)