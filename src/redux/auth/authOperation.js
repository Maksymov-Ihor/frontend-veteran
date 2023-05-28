import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:5000';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

const signup = createAsyncThunk(
    'auth/signup',
    async (object, thunkAPI) => {
        try {
            const response = await axios.post('/admin/signup', object);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const login = createAsyncThunk(
    'auth/login',
    async (object, thunkAPI) => {
        try {
            const response = await axios.post('/admin/login', object);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.get('/admin/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export { signup, login, logout };