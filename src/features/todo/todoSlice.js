import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState={
    todos:[{id:1,text:'hello'},{id:2,text:'mikasa'}]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            //action.payload is an object
           state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const {addTodo, removeTodo}=todoSlice.actions;
export default todoSlice.reducer