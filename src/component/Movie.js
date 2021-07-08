

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image } from 'react-bootstrap/';
class Movie extends React.Component {
    render() {
        return (
            <div>

<Card style={{ width: '20rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black', margin: '100px' }} >

<Card.Body>
    <Card.Title>Movies information</Card.Title>
            
                <Image src={this.props.movie.image_url} alt={this.props.movie.title} style={{width:'17rem'}}/>
                <Card.Text>
                 title: {this.props.movie.title} 
                </Card.Text>
                <Card.Text>
                   overview: {this.props.movie.overview} 
                </Card.Text>
                <Card.Text>
                    avarge_votes: {this.props.movie.avarge_votes} 
                </Card.Text>
                <Card.Text>
                    total_votes: {this.props.movie.total_votes} 
                </Card.Text>
                <Card.Text>
                   popularity: {this.props.movie.popularity} 
                </Card.Text>
                <Card.Text>
                    relased_on: {this.props.movie.relased_on} 
                </Card.Text>
                
</Card.Body>
</Card>
            </div>
        )

        
    }

}
export default Movie;