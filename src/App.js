import React, { Component } from 'react';
import './App.css';

class App extends Component {

  submit = () => {
    console.log(this.text.value);
  }

  render() {
    return (
      <div>
        <Welcome text="Welcome form React 16"/>
        <input type="text" ref={(input) => this.text = input}/>
        <button onClick={this.submit}>Show value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render(){
    const { text } = this.props;

    return(
      <h1>{text}</h1>
    );
  }
}

export default App;
