import React, { useState } from 'react'
import { useTodo } from '../context/index'
function Todoitem({ todo }) {

  const [isTodoEditable, setisTodoEditable] = useState(false)
  const [todoMsg, settodoMsg] = useState(todo.todo)
  const { deletetodo, togglecomplete, updatetodo } = useTodo()

  const editTodo = () => {
    updatetodo(todo.id, { ...todo, todo: todoMsg })
    setisTodoEditable(false);
  }
  const togglecompleted = () => {
    togglecomplete(todo.id)
  }
  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  
    text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input type="checkbox" className=' cursor-pointer' checked={todo.completed} onChange={togglecompleted} />
      <input type="text" className={`border outline-none w-full bg-transparent rounded-lg font-bold 
      ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`} 
      value={todoMsg} onChange={(e) =>  settodoMsg(e.target.value )} readOnly={!isTodoEditable} />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50" onClick={() => {
          if (todo.completed) return

          if (isTodoEditable) {
            editTodo();
          } else setisTodoEditable((prev) => !prev)
        }} disabled={todo.completed}>{isTodoEditable ? "➕" : "📝"}</button>
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" onClick={() => deletetodo(todo.id)}>❌</button>
    </div>
  )
}

export default Todoitem