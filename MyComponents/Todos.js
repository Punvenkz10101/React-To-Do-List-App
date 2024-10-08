import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <React.Fragment key={todo.sno}> {/* Use key on React.Fragment */}
              <TodoItem todo={todo} onDelete={props.onDelete} /> 
              
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

export default Todos;
