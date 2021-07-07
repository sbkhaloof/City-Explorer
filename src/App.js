import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import Weather from './component/Weather';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInfo: {},
      findQuery: '',
      showMap: false,
      weatherArr: [],
      showWeather: false,
      showError:false
    }
  }
  // this fun for location 
  getCityName = async (event) => {
    event.preventDefault();
    await this.setState({
      findQuery: event.target.city.value,
      

    })

    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.findQuery}&format=json`;
    let respData = await axios.get(url);
    console.log(respData)
    this.setState({
      cityInfo: respData.data[0],
      showMap: true 
    })
    this.getWeatherData();
  }
// this part for the weather
  getWeatherData = async () => {

    let city = this.state.findQuery.charAt(0).toUpperCase() + this.state.findQuery.slice(1);
    
    console.log(city)
   
     let weatherUrl = `http://localhost:3008/getWeatherInfo?cityName=${city}&format=json`;
    console.log(weatherUrl)
    let weather = await axios.get(weatherUrl);
    // { params: { serchquery: this.state.findQuery } }
    await this.setState({
      weatherArr: weather.data,
      showWeather: true,
      

    })
    { console.log(this.state.weatherArr, 'in fun') }
  }



  render() {
    return (
      <>
        <h1 >
          City Explorer

        </h1>

        <Form onSubmit={this.getCityName} style={{ width: '20rem', backgroundColor: '#b0ceff' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter city name" name="city" />
          </Form.Group>

          <Button variant="primary" type="submit">Explorer</Button>
        </Form>
        <br />
        <br />

        <Card style={{ width: '18rem' ,margin:'100px'}}>
          <Card.Body>
            <Card.Title>City Data</Card.Title>
            <Card.Text>
              City Name:{this.state.cityInfo.display_name}
              <br />
              {this.state.cityInfo.lat},{this.state.cityInfo.lon}
            </Card.Text>
            <br/>
            <br/>
            {this.state.showMap &&
              <Image  style={{width:' 15rem '}} src={`https://maps.locationiq.com/v3/staticmap?key=pk.3fb65df48ea9b1418d02d4dc6b9a89f1&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=15`} rounded />}
          </Card.Body>
        </Card>
        <Weather weatherArr={this.state.weatherArr} showWeather={this.state.showWeather} cityInfo={this.state.cityInfo} getWeatherData={this.getWeatherData} />
      </>
    );
  }
}
export default App;