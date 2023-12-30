import React, { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  
  const [todos, setTodos] = useState([])  

  const addTodo = (todo) =>{
    setTodos((prev) =>[{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id,todo) =>{
    setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo= (id) =>{
    setTodos((prev) => prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev)=>prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0){
      setTodos(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className='bg-orange-400 min-h-screen py-8'>
      <div>
        <h1 className=' text-center  text-3xl text-stone-950'>Manage Your Todos</h1>
        <div>
          {/* Todo Form */}
          <TodoForm/>
        </div>
        <div>
          {/* Loop and TodoItem Here */}
          {todos.map((todo) => (
            <div key={todo.id} className='w-full'>
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  </TodoProvider>
  )
}


export default App