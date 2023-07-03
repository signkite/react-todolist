import React from 'react';
import { DelIcon, Container, TodoText } from './TodoElement.styled.jsx';

export default function TodoElement({todo, handleDelete}) {
  return (
    <Container>
      <input style={{marginLeft: "15px"}} type="checkbox" />
      <TodoText>{todo}</TodoText>
      <div>
        <DelIcon onClick={handleDelete}/>
      </div>
    </Container>
  )
}
