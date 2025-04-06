import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, task: "Complete Lab 11", completed: false },
    { id: 2, task: "Review JSX Events and State", completed: false }
  ]);

  const markComplete = (id) => {
    const updatedList = todoList.map(item =>
      item.id === id ? { ...item, completed: true } : item
    );
    setTodoList(updatedList);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id} style={{ 
            textDecoration: item.completed ? "line-through" : "none", 
            marginBottom: "10px"
          }}>
            {item.task}
            {!item.completed && (
              <button 
                onClick={() => markComplete(item.id)} 
                style={{ marginLeft: "10px" }}
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;