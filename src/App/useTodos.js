import React from 'react'
import { useLocalStorage } from "./useLocalStorage.js";


function useTodos(){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);

      const [searchValue, setSearchValue] = React.useState("");
      const [openModal,setOpenModal]= React.useState(false)


      let searchedTodos = [];
      
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
      
      const completedTodos = searchedTodos.filter((todo) => todo.completed).length;
      const totalTodos = todos.length;
      

      const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
          completed:false,
          text
        })
        saveTodos(newTodos)
      }


      const toggleCompleteTodo = (todoText) => {
        const todoIndex = todos.findIndex((todo) => todo.text === todoText);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (todoText) => {
        const todoIndex = todos.findIndex((todo) => todo.text === todoText);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    return {
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }
}
export {useTodos}

