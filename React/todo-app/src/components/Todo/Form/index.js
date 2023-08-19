import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({newTodo: ""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.newTodo === ""){
            return false;
        }

    }
  return (
    	<header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input 
            className="new-todo"
            name="newTodo"
            placeholder="What needs to be done?" 
            autoFocus 
            onChange={onChangeInput}
            />
            <button>Add</button>
		</form>
	</header>
  );
}

export default Form
