import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        getAllTradesmen: builder.query({
            query: () => `/tradesman`,
        }),
        getTrademanById: builder.query({
            query: (id) => `/tradesman/${id}`,
          }),
          getTrademanByEmail: builder.query({
            query: (email) => `/tradesman/getProfile/${email}`,
          }),
        addTradesman: builder.mutation({
            query: (data) => ({
                url: '/tradesman',
                method: 'POST',
                body: data,
            }),
        }),
        updateTradesman: builder.mutation({
            query: ({ id, data }) => ({
              url: `/tradesman/update/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        deleteTradesman: builder.mutation({
            query: (id) => ({
              url: `/tradesman/${id}`,
              method: 'DELETE',
            }),
          }),
        addUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            }),
        }),
        signUpUser: builder.mutation({
            query: (data) => ({
                url: '/signUp',
                method: 'POST',
                body: data,
            }),
        }),
        editUser: builder.mutation({
            query: ({ userID, data }) => ({
                url: `/uploads${userID}`,
                method: 'PUT',
                body: data,
            })
        }),
        deleteUser: builder.mutation({
            query: (userID) => ({
                url: `/uploads${userID}`,
                method: 'DELETE',                
            })
        })
    })
})

export const {
    useGetAllTradesmenQuery,
    useGetTrademanByIdQuery,
    useGetTrademanByEmailQuery,
    useAddTradesmanMutation,
    useUpdateTradesmanMutation,
    useDeleteTradesmanMutation,
    useAddUserMutation,
    useEditUserMutation,
    useDeleteUserMutation,
    useLoginUserMutation,
    useSignUpUserMutation
} = storeApi