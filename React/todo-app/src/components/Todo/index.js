import React from 'react'
import { useEffect, useState } from "react";
import './style.css'

function Todo() {
     
     const [todo, setTodo] = useState([
       {
         mission: "Learn JavaScript",
         isCompleted: true
       },
       {
         fullname: "Learn React",
         isCompleted: false
       },
       {
         fullname: "Have a life!",
         isCompleted: false
       },
     ]);
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </form>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button className="destroy"></button>
              </div>
            </li>
          </ul>
        </section>
        <footer class="footer">
          <span class="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul class="filters">
            <li>
              <a href="#/" class="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button class="clear-completed">Clear completed</button>
        </footer>
      </section>
      <footer class="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Todo
