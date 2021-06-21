import React from "react";
import "./Todolist.css";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from "reactstrap";

class Todolist extends React.Component {
  render() {
    return (
      <div className="TodoList">
        {this.props.todos.map(todo =>
          <div className="TodoItem" key={todo.key}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon className="InputCheckBox" type="checkbox" onClick={() => this.props.checkedTodo(todo.key)} />
                </InputGroupText>
              </InputGroupAddon>
              {todo.toggle ?
                <Input className="EditOrSave" type="text" placeholder="Edit your todo here" value={todo.todo}
                  onChange={(event) => this.props.editTodo(event.target.value, todo.key)} /> :

                <Input className="EditOrSave" type="text" value={todo.todo} style={todo.checked ? { textDecoration: "line-through" } : null}
                  onChange={() => { }} />
              }
              <Button size="sm" color="warning" className="EditOrSaveButton" onClick={() => this.props.toggleButton(todo.key)}>{todo.toggle ? "Save" : "Edit"}</Button>
              <Button size="sm" color="danger" className="DeleteButton" onClick={() => this.props.deleteTodo(todo.key)}>Delete</Button>
            </InputGroup>
          </div>
        )}
      </div>
    );
  }
};

export default Todolist;
