import React, { Component } from 'react';
import './App.css';
import Wrapper from "./jtCom/testForm/wrapper";
import FormCheck from "./jtCom/testForm/Form";
import APIfoods from "./Utils/API/API_foods";
//import APIRest from "./Utils/API/API_resturants";
import Results from "./jtCom/results";
import SubmitBtn from "./jtCom/testForm/Submit"

class App extends Component {

  state = {
    search: "",
    results: [],
    createFood: {},
    item: "",
    information: "",
    category: "",
    price: 0,
    createdBy: "",
    resturantName: ""
  }


  updateCreate = event => {

    this.setState({

      item: event.target.item,
      information: event.target.information,
      category: event.target.category,
      price: event.target.createdBy,
      createdBy: event.target.price,
      resturantName: event.target.resturantName


    })

    this.setState({



    })

  }

  createItem = e => {

    if (this.state.createResturant.item || this.state.createResturant.information || this.state.createResturant.category || this.state.createResturant.createdBy || this.state.createResturant.price || this.state.createResturant.resturantName === "") {

      alert("Please fill the form to complete")
    } else {

      APIfoods.createFood(this.state.createFood).then(res => {


      })

    }

  }


  handleChange = event => {
    this.setState({
      search: event.target.value
    })
    console.log(this.state.search)
  }


  searchAll = e => {
    e.preventDefault()
    console.log(this.state.search)
    APIfoods.getSearchName(this.state.search)
      .then(function (res) {
        console.log(res.data[0])

        res.data.forEach(element => {

        });
        this.state.myArray.push('new value')
        this.setState({ results: res.data })
          .catch(err => console.log(err));
      }
      )
  }












  render() {
    return (
      <Wrapper>
        <form>

          <FormCheck
            value={this.state.search}
            onChange={this.handleChange}
            searchAll={this.searchAll}
            name="Search"
          />

          <SubmitBtn


            onClick={this.searchAll}
          />

        </form>

        <Results

          results={this.state.results}

        />

      </Wrapper >


    );
  }
}

export default App;
