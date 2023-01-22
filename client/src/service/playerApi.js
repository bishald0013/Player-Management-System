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

    })
})

export const { useAddPlayerMutation } = playerApi

