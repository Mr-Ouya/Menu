import React, { Component } from 'react';
import './App.css';
import Wrapper from ".jtCom/testForm/wrapper";
import FormCheck from ".jtCom/testForm/Form";
import APIfoods from "./Utils/API/API_foods";
import APIRest from "./Utils/API/API_resturants";
import Results from ".jtCom/results";

class App extends Component {

  state = {
    search: "",
    results: [],
    createFood:{},
    createResturant:{
        item:"",
        information:"",
        category:"",
        price:0,
        createdBy:"",
        resturantName:""
    }
  }

updateCreate(event){

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

  createItem = (e) => {

    if(this.state.createResturant.item ||this.state.createResturant.information ||this.state.createResturant.category||this.state.createResturant.createdBy|| this.state.createResturant.price||this.state.createResturant.resturantName === ""){

      alert("Please fill the form to complete")
    }else{

      APIfoods.createFood(this.state/.)

    }

  }

 
  handleChange(event) {
    this.setState({
      search: event.target.search
    })
  }


  searchAll = (e) => {
    e.preventDefault()
    console.log("gi")
    APIfoods.getSearchName(this.state.search)
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
