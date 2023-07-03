import React from 'react'
import TodoElement from './TodoElement';
import { useState } from 'react';

export default function TodoBoard({todoItems, handleDelete}) {

  return (
    <>
      <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
          {
            todoItems.map((todo, index)=>
              <li key={todo} style={{marginTop: '10px'}}>
                <TodoElement todo={todo} handleDelete={()=>{handleDelete(index)}}/>
              </li>
            )
          }
        </ul>
    </>
  )
}
