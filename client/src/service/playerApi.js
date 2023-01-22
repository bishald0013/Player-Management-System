import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const playerApi = createApi({
    reducerPath: "playerApi",

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/player/' }),

    endpoints: (builder) => ({

        addPlayer: builder.mutation({
            query:(data)=>{
                return{
                    url:"addPlayer",
                    method:"POST",
                    body:data,
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        }),

        getPlayer: builder.query({
            query:(token)=>{
                return{
                    url:"getPlayer",
                    method:"GET",
                    headers:{
                        "authorization":`Bearer ${token}`
                    }
                }
            }
        }),

    })
})

export const { useAddPlayerMutation, useGetPlayerQuery } = playerApi

