import React from 'react'
import logo from './logo.svg';
import './App.css';
import Message from './Message';


const initialState = {
  name: 'shamanito',
  message : "mensajito"
}

type State = Readonly<typeof initialState>

export default class App extends React.Component<any,State> {

  readonly state: State = initialState

  /*componentWillMount(){
    console.log('Almost there')
  }

  componentDidMount(){
    console.log('Finaly .... hello')
  }*/

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           
            <Message name={this.state.name} message={this.state.message} />
          </header>
        </div>
      );
  }
}
