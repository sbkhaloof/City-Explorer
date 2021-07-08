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
                                        <Image src={movie.image_url} alt={movie.title} style={{width:'17rem'}}/>
                                        <Card.Text>
                                         title: {movie.title} 
                                        </Card.Text>
                                        <Card.Text>
                                           overview: {movie.overview} 
                                        </Card.Text>
                                        <Card.Text>
                                            avarge_votes: {movie.avarge_votes} 
                                        </Card.Text>
                                        <Card.Text>
                                            total_votes: {movie.total_votes} 
                                        </Card.Text>
                                        <Card.Text>
                                           popularity: {movie.popularity} 
                                        </Card.Text>
                                        <Card.Text>
                                            relased_on: {movie.relased_on} 
                                        </Card.Text>
                                        <br></br>
                                        <br></br>
                                        <br></br>
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