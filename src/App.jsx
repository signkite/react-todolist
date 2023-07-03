import React, { useState } from "react";
import TodoElement from "./components/TodoElement";
import TodoBoard from "./components/TodoBoard";
import s from './App.module.css'
import { Container } from "./components/TodoElement.styled";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todoFilter, setTodoFilter] = useState([]);
  const [todos, setTodos] = useState([]);
  // todoState
  // 0 : Active
  // 1 : Complete
  const [todoStates, setTodoStates] = useState([]);
  
  const darkModeHandle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <div
        className={s.container}
        style={isDarkMode
          ? {backgroundColor: '#00008f', color: '#fff'}
          : {backgroundColor: '#f0f8ff', color: '#000'}}
      >
        <header className={s.header}>
          <div className={isDarkMode ? s.darkmode : s.lightmode}></div>
          <div className={s.filter}>Complete</div>
          <div style={{width: '15px'}}></div>
          <div className={s.filter}>Active</div>
          <div style={{width: '15px'}}></div>
          <div className={s.filter}>All</div>
        </header>
        <div>
          <TodoBoard/>
        </div>
      </div>
    </>
  );
}

export default App;
