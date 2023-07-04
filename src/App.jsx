import React, { useState } from "react";
import TodoElement from "./components/TodoElement";
import TodoBoard from "./components/TodoBoard";
import s from './App.module.css'
import { Container } from "./components/TodoElement.styled";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // todoFilter
  // 0: All
  // 1: Active
  // 2: Complete
  const [todoFilter, setTodoFilter] = useState(0);
  const [todoItems, setTodoItems] = useState([]);
  const [inputTodo, setInputTodo] = useState("")
  
  // todoState
  // false : Active
  // true : Complete
  const [todoStates, setTodoStates] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputTodo === '') return

    setTodoItems([...todoItems, inputTodo]);
    setTodoStates([...todoStates, false]);
    setInputTodo("");
    const textInput = document.getElementById('textInput');
    textInput.value = '';
  }

  const handleChange = (event) => {
    setInputTodo(event.target.value);
  }

  const handleDelete = (delIndex) => {
    console.log('before: ', todoItems);
    setTodoItems(todoItems.filter((_, index) => index !== delIndex))
    setTodoStates(todoStates.filter((_, index) => index !== delIndex))
    console.log('after: ', todoItems);
  }

  const handleClick = (checkIndex) => {
    console.log(checkIndex)
    console.log('before', todoStates)
    setTodoStates(todoStates.map((item, index) => {
      return index === checkIndex ? !item : item;
    }))
    console.log('after', todoStates)
  }

  return (
    <>
      <div
        className={s.container}
        style={isDarkMode
          ? {backgroundColor: '#00008f', color: '#fff'}
          : {backgroundColor: '#f0f8ff', color: '#000'}}
      >
        <header
          className={s.header}
          style={isDarkMode ? {backgroundColor: '#2222af'} : {}}>
          <div
            className={isDarkMode ? s.darkmode : s.lightmode}
            onClick={()=>setIsDarkMode(!isDarkMode)} 
          >
          </div>
          <div
            className={s.filter}
            onClick={()=>setTodoFilter(2)}
            style={todoFilter == 2 ? {color: 'orange'} : {}}
          >Complete</div>
          <div style={{width: '15px'}}></div>
          <div
            className={s.filter}
            onClick={()=>setTodoFilter(1)}
            style={todoFilter == 1 ? {color: 'orange'} : {}}
          >Active</div>
          <div style={{width: '15px'}}></div>
          <div
            className={s.filter}
            onClick={()=>setTodoFilter(0)}
            style={todoFilter == 0 ? {color: 'orange'} : {}}
          >All</div>
        </header>

        <div style={{width: '400px', height: '380px'}}>
          <TodoBoard
            todoItems={todoItems}
            handleDelete={handleDelete} 
            handleClick={handleClick}
            todoFilter={todoFilter}
            todoStates={todoStates}
          />
        </div>
        
        <form className={s.inputLine} onSubmit={handleSubmit}>
          <input
            type="text"
            id="textInput"
            style={{marginLeft: '15px', width: '300px', height: '30px'}}
            onChange={handleChange}
          />
          <button
            type="submit"
            style={{marginLeft: '15px', width: '40px', height: '32px'}}
          >확인</button>
        </form>
      </div>
    </>
  );
}

export default App;
