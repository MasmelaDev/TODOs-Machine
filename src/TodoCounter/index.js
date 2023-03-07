import React from "react"
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext"

function TodoCounter() {
  const {completedTodos,totalTodos} = React.useContext(TodoContext)
  return (
    <>
    <h1 className="title">Just Do it</h1>
    <h2 className="todoCounter">Has compleatado {completedTodos} de {totalTodos} TODOs</h2>
    </>
  )
}

export {TodoCounter}