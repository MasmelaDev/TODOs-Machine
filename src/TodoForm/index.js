import React from 'react'
import "./TodoForm.css"
function TodoForm({addTodo,setOpenModal}) {
    const [newTodoValue,setNewTodoValue] = React.useState("")

    const onChange = (entry) =>{
        setNewTodoValue(entry.target.value)
    } 


    const onCancel= ()=>{
        setOpenModal(prevState => !prevState);
        document.querySelector(".CreateTodoButton").classList.toggle("active")

    }
    const onSubmit = (entry)=>{
        entry.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(prevState => !prevState);
        document.querySelector(".CreateTodoButton").classList.toggle("active")


    }
  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO !</label>
        <textarea value={newTodoValue} onChange={onChange} placeholder='TODO...'/>
        <div className='TodoFormButtons'> 
            <button onClick={onCancel} type='button'>Cancelar</button>
            <button type='submit'>Agregar</button>
        </div>
    </form>
  )
}

export  {TodoForm}