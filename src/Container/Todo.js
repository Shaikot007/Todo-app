import React from "react";
import "./Todo.css";
import Todolist from "./Todolist";
import { Form, Input, Button } from "reactstrap";
import { addTodoAction, toggleCheckAction, toggleButtonAction, editTodoAction, deleteTodoAction } from "../reduxAction/todosAction";
import { connect } from "react-redux";

//React

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.todo !== "") {
      const currentTodo = {
        todo: this.state.todo,
        key: Date.now(),
        toggle: false,
        checked: false
      }
      this.props.addTodo(currentTodo);
      this.setState({
        todo: ""
      })
    }
  };

  handleCheck = (key) => {
    this.props.toggleCheck(key);
  };

  handleToggle = (key) => {
    this.props.toggleButton(key);
  };

  handleEdit = (todo, key) => {
    const editodo = { todo: todo, key: key };
    this.props.editTodo(editodo);
  };

  handleDelete = (key) => {
    this.props.deleteTodo(key);
  };

  render() {
    return (
      <div className="Todo">
        <header>
          <h4>Type your todo here</h4>
        </header>
        <div className="TodoFormBody">
          <Form className="TodoForm" onSubmit={this.handleSubmit}>
            <Input className="TodoFormInput" type='text' placeholder="Enter your todo here" value={this.state.todo} onChange={this.handleChange} />
            <Button size="md" color="success" className="TodoFormButton" type="submit">Submit</Button>
          </Form>
          <Todolist todos={this.props.todo} checkedTodo={this.handleCheck} toggleButton={this.handleToggle} editTodo={this.handleEdit} deleteTodo={this.handleDelete} />
        </div>
        <footer>
          <p>Made by <a href="https://github.com/Shaikot007" target="_blank" rel="noopener noreferrer">Shaikot</a></p>
        </footer>
      </div>
    );
  }
};

//React redux

const mapStateToProps = (state) => {
  return { todo: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (currentTodo) => {
      dispatch(addTodoAction(currentTodo))
    },
    toggleCheck: (key) => {
      dispatch(toggleCheckAction(key))
    },
    toggleButton: (key) => {
      dispatch(toggleButtonAction(key))
    },
    editTodo: (editodo) => {
      dispatch(editTodoAction(editodo))
    },
    deleteTodo: (key) => {
      dispatch(deleteTodoAction(key))
    },
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default Container;
