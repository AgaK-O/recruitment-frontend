import { createSlice } from "@reduxjs/toolkit";
import { mockTodos } from "./mock-data";

const todoSlice = createSlice({
    name: "todos",
    initialState: mockTodos,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: Date.now(),
                text: action.payload.title,
                isCompleted: false,
            }
            state.push(newItem)
        },

        toggleItem: (state, action) => {
            const i = state.findIndex(
                (item) => item.id === action.payload.id
            );
            state[i].isCompleted = action.payload.completed;
        },

        deleteItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addItem, toggleItem, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;