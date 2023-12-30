"use client"
import React, { useState } from 'react';


const Main = () => {
  const [Num, setNum] = useState(1)

  const addMe = function addMe(){
    setNum(Num + 1)
    if(Num==20){
      setNum(20)
    }
    else{
      setNum(Num + 1)
    }
  }
  const minusMe = function MinusMe(){
    setNum(Num - 1)
    if(Num==0){
      setNum(0)
    }
  }
  const Reset = function Reset(){
    setNum(0)
  }

  return (
    <>
    <h1>{Num}</h1>
    <button onClick={addMe}>+</button>
    <button onClick={Reset}>0</button>
    <button onClick={minusMe}>-</button>
    </>
  )
}

export default Main

