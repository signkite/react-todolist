import React from 'react'
import TodoElement from './TodoElement';
import { useState } from 'react';

export default function TodoBoard({filter}) {
  const [todoItems, setTodoItems] = useState(['he', 'llo']);

  return (
    <>
      <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
          {
            todoItems.map((todo)=>
              <li key={todo} style={{marginTop: '10px'}}>
                <TodoElement todo={todo} />
              </li>
            )
          }
        </ul>
    </>
  )
}
