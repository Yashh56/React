import React, { useEffect, useState } from 'react'
import { TodoProvider } from './context/index'
import Todoform from './components/Todoform'
import Todoitem from './components/Todoitem'



function App() {

  const [todos, setTodo] = useState([])

  const addtodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const deletetodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id))
  }
  const updatetodo = (id, todo) => {
    setTodo((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }
  const togglecomplete = (id) => {
    setTodo((prev) => prev.map((prevtodo) => prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider value={{ todos, addtodo, deletetodo, updatetodo, togglecomplete }}>
      <div className=' bg-yellow-400 min-h-screen py-8'>
        <div>
          <h1 className=' font-serif text-black/50 mt-5 text-center text-4xl'>manage your Todo 🌻</h1>
          <div>
            <Todoform />
          </div>
          <div>
            {todos.map((todo) => (
              <div key={todo.id} className=' w-full'> <Todoitem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App