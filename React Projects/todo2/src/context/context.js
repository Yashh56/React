import {useContext,createContext} from 'react'

export const TodoContext = createContext({
    todos:[],
    addtodo:(todo,id) =>{},
    deletetodo:(id) =>{},
    updatetodo:(todo,id) =>{},
    togglecomplete:(id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
// import { useContext, createContext } from 'react'
// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo:"todo msg" ,
//             completed: false
//         },
//     ],
//     addtodo : (todo) =>{},
//     deletetodo:(id) =>{},
//     updatetodo:(id,todo) =>{},
//     tooglecompleted:(todo,id)=>{}
// })

// export const useTodo =  () =>{
//     return useContext(TodoContext)}

// export const TodoProvider = TodoContext.Provider
