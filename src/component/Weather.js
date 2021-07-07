import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/'


class Weather extends React.Component {
    render() {
        return (
            <>
            {console.log(this.props.weatherArr,'array from weathe')}
             {this.props.showWeather &&
                <Card style={{ width: '20rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black' ,margin:'100px'}} >

                <Card.Body>
                    <Card.Title>Weather information</Card.Title>


                    {this.props.weatherArr.map((day,index) =>{
                        return(
                        <div key = {index}> 
                            <Card.Text>
                                {day.date} { ':' } {day.description}
                            </Card.Text>
                        </div>)
    })}
                </Card.Body>
            </Card>
        }


            </>
        )
    }

}
export default Weather;