import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Card} from 'react-bootstrap';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
        cityInfo:{},
        findQuery:''
      }
    }
    getCityName =async(event)=>{
      event.preventDefault();
      await this.setState({
        findQuery:event.target.city.value
      })

let url=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.findQuery}&format=json`;
let respData=await axios.get(url);
console.log(respData)
this.setState({
  cityInfo:respData.data[0]
})

}
    

  

 
  render(){
  return(
<>
  <h1>
    City Explorer
  </h1>

  <Form onSubmit={this.getCityName}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>City Name</Form.Label>
    <Form.Control type="text" placeholder="Enter city name" name="city" />
  </Form.Group>

  <Button variant="primary" type="submit">Explorer</Button>
  </Form>
 <br/>
 <br/>
 <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>City Data</Card.Title>
    <Card.Text>
     City Name:{this.state.cityInfo.display_name}
     <br/>
     {this.state.cityInfo.lat},{this.state.cityInfo.lon}
    </Card.Text>
    
  </Card.Body>
</Card>
 </>
  );
}}
export default App;