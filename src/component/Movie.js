import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Image } from 'react-bootstrap/';
class Movie extends React.Component {
    render() {
        return (
            <>

                {console.log(this.props.movieData, 'array from wmovie')}
                {this.props.showMovie &&
                    <Card style={{ width: '20rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black', margin: '100px' }} >

                        <Card.Body>
                            <Card.Title>Movies information</Card.Title>


                            {this.props.movieData.map((movie, index) => {
                                return (
                                    <div key={index}>
                                        <Image src={movie.image_url} alt={movie.title}/>
                                        <Card.Text>
                                            {movie.title} 
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.overview} 
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.avarge_votes} 
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.total_votes} 
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.popularity} 
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.relased_on} 
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
export default Movie;