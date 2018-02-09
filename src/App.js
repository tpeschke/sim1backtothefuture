import React, { Component } from 'react';
import './App.css';
import RenderOnly from './components/renderOnly'
import RevieveProps from './components/revieveProps'
import Routes from './routes'
import { Link } from 'react-router-dom'
import PostDisplay from './components/postDisplay'

class App extends Component {
  constructor() {
    super()

    this.state = {
      passTo: ''
    }
  }

  handlePass = (e) => {
    this.setState({ passTo: e })
  }

  render() {
    return (
      <div className="App">
        <h1>This is totaly Sim1: I'm simply testing everything before making the project</h1>

        <RenderOnly />

        <input onBlur={e => this.handlePass(e.target.value)} />
        <RevieveProps
          value={this.state.passTo} />
        <br />

        <Link to='/1'><button>Go to page 1</button></Link>
        <Routes /> 
        <br />

        <PostDisplay />
      </div>
    );
  }
}

export default App;
