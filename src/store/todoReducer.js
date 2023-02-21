import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice ({
    name: "manipulateTodo",

    initialState: [],
    // initialState: {
    //     nextId: 2,
    //     data:
    //      {
    //         1: {
    //             content: 'Content 1',
    //             completed: false
    //         }
    //      }
    // },

    reducers: {
        // Add to todo list
        addTodos: (state, action) => {
            state.push(action.payload); // .push used to push new todo entries into an array to be used later
            return state;
        },

        //remove todos
        removeTodos: (state, action) => {
            return state.filter(item => item.id !== action.payload); 
            // .filter used to delete a specific entry based on their id
        },
        //edit todos
        editTodos: (state, action) => {
            return state.map( todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, // ... spreads an array but in this case we are making a copy
                        content: action.payload.item, // changes content depending on user input
                    } 
                    
                }
                return todo;
            });

        },
        // Completed
        completeTodos: (state, action) => {
            return state.map( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, // ... spreads an array but in this case we are making a copy
                        completed: true, // changes completed to true from false
                    } 
                    
                }
                return todo;
            });
        }




    }
})

export const { addTodos, removeTodos, editTodos, completeTodos } = todoSlice.actions;

export default todoSlice.reducer