import React, { Component } from 'react';
import { ToDoList } from 'src/components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        'Hello 1',
        'Hello 2',
        'Hello 3',
        'Hello 4',
        'Hello 5',
      ],
    };
  }

  test() {

  }

  render() {
    return (
      <div>
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

export default Home;
