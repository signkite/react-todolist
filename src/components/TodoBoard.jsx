import React from 'react'
import TodoElement from './TodoElement';
import { useState } from 'react';
import s from 'styled-components'

export default function TodoBoard({
  todoItems, handleDelete, handleClick,
  todoFilter, todoStates
  }) {

  return (
    <>
      <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
          {
            todoItems
              // .filter((_, index)=>{
              //   if (todoFilter === 1)
              //     return !todoStates[index];
              //   else if (todoFilter === 2)
              //     return todoStates[index];
              //   else
              //     return true
              // })
              .map((todo, index)=>{
                if (todoFilter === 1 && todoStates[index])
                  return <></>
                else if (todoFilter === 2 && !todoStates[index])
                  return <></>
                
                return <li key={todo} style={{marginTop: '10px'}}>
                  <TodoElement
                    todo={todo}
                    checked={todoStates[index]}
                    handleDelete={()=>{handleDelete(index)}}
                    handleClick={()=>{handleClick(index)}}
                  />
                </li>
              }
            )
          }
        </ul>
    </>
  )
}
