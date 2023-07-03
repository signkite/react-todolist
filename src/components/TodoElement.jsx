import React from 'react';
import { DelIcon, Container, TodoText } from './TodoElement.styled.jsx';

export default function TodoElement({todo}) {
  return (
    <Container>
      <input type="checkbox" />
      <TodoText>{todo}</TodoText>
      <div>
        <DelIcon/>
      </div>
    </Container>
  )
}
