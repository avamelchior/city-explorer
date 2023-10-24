import React from "react";
import "./App.css";
// import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
// console.log(API_KEY);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      cityName: "",
    };
  }

  handleCityInput = (event) => {
    // console.log('life!');
    this.setState({
      cityName: event.target.value,
    });
  };

  handleCityFormSubmit = async (event) => {
    event.preventDefault();
    console.log("city name?", this.state.cityName);
    console.log(API_KEY);

    let URL = `http://us1.locationiq.com/v1/search ? key=${API_KEY}  & q=${this.state.cityName}    &format=json`;

    
  //   let cityInfo = await axios.get(URL);
  //   console.log(cityInfo);
  //   console.log("city info: ", cityInfo.data[0]);

  //   // this.setState({})
  };

  render() {
    // console.log(this.state.cityName);
    return (
      <>
        <h1>Welcome to World Explore!</h1>
        <form onSubmit={this.handleCityFormSubmit}>
          <label>
            Pick a City:
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit"> Get City Data</button>
        </form>

        {/* {this.state.error ? (
          <p>this.state.errorMessage</p>
        ) : (
          <ul>{cityData}</ul>
        )} */}
      </>
    );
  }
}

export default App;
