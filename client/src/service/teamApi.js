import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const teamApi = createApi({
    reducerPath: 'teamApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/team/' }),

    endpoints: (builder) => ({

        createTeam: builder.mutation({
            query:(data)=> {
                return{
                    url:"createTeam",
                    method: "POST",
                    body: data,
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        }),

        getManagerTeam: builder.query({
            query: (email) =>{
                return{
                    url:`getTeam/${email}`,
                    method:"GET",
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        })
    })
})

export const { useCreateTeamMutation, useGetManagerTeamQuery } = teamApi