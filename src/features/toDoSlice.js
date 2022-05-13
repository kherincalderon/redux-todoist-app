import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toDoList: []
}

const toDoSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
      saveToDo: (state, action) => {
          state.toDoList.push(action.payload)
      }
  }
});

export const { saveToDo } = toDoSlice.actions
export default toDoSlice.reducer