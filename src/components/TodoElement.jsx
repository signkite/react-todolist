import React from 'react';
import { DelIcon } from './TodoElement.styled.jsx';

export default function TodoElement() {
  const temp = "todolist"
  return (
    <div style={{display: 'flex'}}>
      <input type="checkbox" />
      <div>{temp}</div>
      <div>
        <DelIcon/>
      </div>
    </div>
  )
}
