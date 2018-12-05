import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Welcome text="Welcome form React 16"/>
    );
  }
}

class Welcome extends Component {
  render(){
    
    //deconstructing this.props object to grab text property from
    const { text } = this.props;

    return(
      <h1>{text}</h1>
    );
  }
}

export default App;
