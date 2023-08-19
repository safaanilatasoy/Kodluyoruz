import {useEffect, useState} from 'react'
import List from './List';
import Form from './Form'
import './style.css'

function Todo() {
     const [todos, setTodos] = useState([]);

     useEffect(() => {
      console.log(todos);
     }, todos)
  return (
    <div>
     <Form />
     <List />
    </div>
  );
}

export default Todo
