import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'This is a React boilerplate with Webpack 4 and Babel 7',
    }
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <header styleName="headers">
          { message }
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default CSSModules(App, styles)
