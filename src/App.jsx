import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Home from './containers/Home';

@CSSModules(styles)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="hello">
        <Home />
      </div>
    );
  }
}

export default App;
