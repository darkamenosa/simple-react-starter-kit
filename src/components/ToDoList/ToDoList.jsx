import React, { Component } from 'react';

class ToDoList extends Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  }
  constructor(props) {
    super(props);
    this.renderTodo = this.renderTodo.bind(this);
  }

  renderTodo(todo, index) {
    return (
      <li key={index}> { todo } </li>
    );
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(this.renderTodo)}
      </ul>
    );
  }
}

export default ToDoList;
