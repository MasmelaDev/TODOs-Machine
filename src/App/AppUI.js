import React from 'react'
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoContext} from "../TodoContext"
import { Modal } from '../Modal';
import { TodosLoading } from '../TodosLoading';
function AppUI() {

  const {error,loading,searchedTodos,toggleCompleteTodo,deleteTodo,openModal,setOpenModal} = React.useContext(TodoContext)

  return (
    <React.Fragment>

      <TodoCounter/>
      <TodoSearch/>



            
      <TodoList>
        {error && <p>Ha ocurrido un error :c</p>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}


        {searchedTodos.map((todo) => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onToggleComplete={() => toggleCompleteTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          ))}
      </TodoList>
        

      {openModal && (
        <Modal >
          <TodoForm />
        </Modal>
      ) }
     
    
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export  {AppUI}