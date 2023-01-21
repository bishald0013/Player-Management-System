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

        loginManager: builder.mutation({
            query: (user) =>{
                return{
                    url:"managerLogin",
                    method:"POST",
                    body:user,
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        }),

        getLoggedManager: builder.query({
            query: (token) => {
                return {
                    url: "loggedManger",
                    method: "GET",
                    headers:{
                        "authorization":`Bearer ${token}`
                    }
                }
            }
        }),

    })
})

export const { useRegisterManagerMutation, useLoginManagerMutation, useGetLoggedManagerQuery } = managerAuthApi