import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:5000';

const listClients = createAsyncThunk(
    'clients/listClients',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/clients');
            if (!response) {
                return;
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const addClient = createAsyncThunk(
    'clients/addClient',
    async ({name, email, phone}, thunkAPI) => {
        try {
            const response = await axios.post('/clients', {name, email, phone});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const deleteClient = createAsyncThunk(
    'clients/deleteClient',
    async (id, thunkAPI) => {
        try {
            const response = axios.delete(`/clients/${id}`);
            return (await response).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export { listClients, addClient, deleteClient }
