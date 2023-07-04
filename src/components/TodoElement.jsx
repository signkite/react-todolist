import React, { useState } from 'react';
import { DelIcon, Container, TodoText } from './TodoElement.styled.jsx';

export default function TodoElement({todo, checked, handleDelete, handleClick}) {

  return (
    <Container>
      <input
        style={{marginLeft: "15px"}}
        type="checkbox"
        checked={checked}
        onChange={() => {
          handleClick();
        }}
     />
      <TodoText
        style={{textDecoration: checked ? 'line-through' : 'none'}}>{todo}</TodoText>
      <div>
        <DelIcon onClick={handleDelete}/>
      </div>
    </Container>
  )
}
