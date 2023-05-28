import { createSlice } from "@reduxjs/toolkit";

import { listClients, addClient, deleteClient } from "./clientsOperation";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
}

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        valueClientFilter(state, action) {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(listClients.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(listClients.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(listClients.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addClient.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addClient.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addClient.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteClient.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteClient.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(client => client._id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteClient.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { valueClientFilter } = clientsSlice.actions;

export const clientsReducer = clientsSlice.reducer; 