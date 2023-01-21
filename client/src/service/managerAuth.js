import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const managerAuthApi = createApi({
    reducerPath: 'managerAuthApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/manager/' }),

    endpoints: (builder) => ({

        registerManager: builder.mutation({
            query:(user) => {
                return{
                    url:"managerSignup",
                    method: "POST",
                    body: user,
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        }),

    })
})

export const { useRegisterManagerMutation } = managerAuthApi