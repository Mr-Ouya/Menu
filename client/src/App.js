import React, { Component } from 'react';
import './App.css';
import Wrapper from "./testForm/wrapper"
import FormCheck from "./testForm/Form"
import API from "./Utils/API/API"
import Results from "./results";

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


  searchAll = (e) => {
    e.preventDefault()
    console.log("gi")
    API.getSearchName(this.state.search)
      .then(res =>

        this.setState({ results: res })

      ).catch(err => console.log(err));

  }












  render() {
    return (
      <Wrapper>

        <FormCheck
          value={this.state.search}
          onChange={this.handleChange}
          searchAll={this.searchAll}
        />
        <Results

          results={this.state.results}

        />

      </Wrapper>


    );
  }
}

export default App;
