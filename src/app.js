import React, { Component } from 'react';
import styles from './app.css'
import CSSModules from 'react-css-modules'
//import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <header styleName="headers">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default CSSModules(App, styles);
//export default App