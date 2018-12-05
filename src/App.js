import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    input: ''
  }

  submit = () => {
    console.log(this.text.value);
  }

  updateInput = (event) => {
    const input = event.target.value.trim();
    this.setState(() => ({ input }));
  }

  render() {
    return (
      <div>
        <Welcome text="Welcome form React 16"/>
        <h3>{this.state.input}</h3>
        <input type="text" onChange={this.updateInput} value={this.state.input}/>
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
