import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('mounted');
  }

  state = {
    visibility: false
  }

  toggleVisibility = () => {
    this.setState(() => ({ visibility: !this.state.visibility }));
  }

  render() {
    //deconstructing this.state object to grab visibility property from
    const { visibility } = this.state;

    return (
      <div>
        <Welcome text="Welcome form React 16"/>
        
        <button onClick={this.toggleVisibility}>{visibility ? 'Hide paragraph' : 'Show paragraph'}</button>
        {visibility && <p>This should show and hide</p>}
      </div>
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
