import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./testForm/wrapper"
import FormCheck from "./testForm/Form"

class App extends Component {

  state = {
    search: "",
    results: []
  }



  handleChange(event) {
    this.setState({
      search: event.target.search
    })
  }













  render() {
    return (
      <Wrapper>

        <FormCheck

          value={this.state.search}
          onChange={this.handleChange}

        />

      </Wrapper>
    );
  }
}

export default App;
