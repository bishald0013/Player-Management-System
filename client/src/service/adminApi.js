import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const adminApi = createApi({
    reducerPath: 'adminApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/admin/'}),

    endpoints: (builder) => ({
        
        adminLogin: builder.mutation({
            query: (data) => {
                return{
                    url: "adminLogin",
                    method: "POST",
                    body: data,
                    headers: {
                        "Content-type":"application/json"
                    }       
                }
            }
        }),

        allPlayers: builder.query({
            query:()=> {
                return{
                    url:"allPlayers",
                    method:"GET",
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        }),

        allManager: builder.query({
            query:()=> {
                return{
                    url:"allManager",
                    method:"GET",
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        }),

        allSports: builder.query({
            query:()=> {
                return{
                    url:"allTeam",
                    method:"GET",
                    headers:{
                        "Content-type":"application/json"
                    }
                }
            }
        }),
    })
})

export const  { useAdminLoginMutation, useAllPlayersQuery, useAllManagerQuery, useAllSportsQuery } = adminApi