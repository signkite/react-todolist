import React, { useState } from "react";
import TodoElement from "./components/TodoElement";
import TodoBoard from "./components/TodoBoard";
import s from './App.module.css'
import { Container } from "./components/TodoElement.styled";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todoFilter, setTodoFilter] = useState([]);
  const [todoItems, setTodoItems] = useState([]);
  const [inputTodo, setInputTodo] = useState("")
  // todoState
  // 0 : Active
  // 1 : Complete
  const [todoStates, setTodoStates] = useState([]);
  
  const darkModeHandle = () => {
    setIsDarkMode(!isDarkMode);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputTodo === '') return

    setTodoItems([...todoItems, inputTodo]);
    setInputTodo("");
    const textInput = document.getElementById('textInput');
    textInput.value = '';
  }

  const handleChange = (event) => {
    setInputTodo(event.target.value);
  }

  const handleDelete = (delIndex) => {
    console.log('before: ', todoItems);
    setTodoItems(todoItems.filter((_, index) => index !== index))
    console.log('after: ', todoItems);
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
          <div className={s.filter}>Complete</div>
          <div style={{width: '15px'}}></div>
          <div className={s.filter}>Active</div>
          <div style={{width: '15px'}}></div>
          <div className={s.filter}>All</div>
        </header>

        <div style={{width: '400px', height: '380px'}}>
          <TodoBoard
            todoItems={todoItems}
            handleDelete={handleDelete}  
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
