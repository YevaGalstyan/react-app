import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {List, TodoSlice} from '../../constants/list';

const initialState: TodoSlice = {
    list: [],
    loading: false,
    error: null,
}

export const fetchData = createAsyncThunk('1', async ():Promise<List[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
})

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchData.rejected, (state) => {
            state.loading = false;
        });
    }
})

export default todoSlice.reducer