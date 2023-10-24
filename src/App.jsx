import React from "react";
import "./App.css";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
// console.log(API_KEY);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      cityName: "",
      cityInfo: null,
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

    let URL = `http://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.cityName}&format=json`;

    let cityInfo = await axios.get(URL);

    console.log("city info: ", cityInfo.data[0]);

    this.setState({
      cityInfo: cityInfo.data[0],
      error: false,
    });
  };

  render() {
    // console.log(this.state.cityName);
    // console.log(this.state.cityInfo.img_url);
    // let cityData = this.state.cityInfo

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
        {this.state.cityInfo && (
          <>
            <p>{this.state.cityInfo.display_name}</p>
            <p>{this.state.cityInfo.lat}</p>
            <p>{this.state.cityInfo.lon}</p>
          </>
        )}

        {/* {
          <>
          this.state.lat && this.state.lon && this.state.cityInfo.img_url &&
          <img src={this.state.cityInfo.img_url} alt={this.state.cityInfo.display_name} title={this.state.cityInfo.display_name}  />
          </>
        } */}
      </>
    );
  }
}

export default App;
