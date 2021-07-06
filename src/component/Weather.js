import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/'


class Weather extends React.Component {
    render() {
        return (
            <>
            {/* {console.log(this.props.weatherArr,'array from weathe')} */}
             {this.props.showWeather &&
                <Card style={{ width: '28rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black' ,margin:'100px'}} >

                <Card.Body>
                    <Card.Title>Weather for : {this.props.weatherArr.display_name}</Card.Title>


                    {this.props.weatherArr.map(day =>
                        <>
                            <Card.Text>
                                {day.date}
                            </Card.Text>
                            <Card.Text>
                                {day.description}
                            </Card.Text>
                        </>
                    )}
                </Card.Body>
            </Card>
        }


            </>
        )
    }

}
export default Weather;