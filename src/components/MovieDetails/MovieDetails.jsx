import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function MovieDetails() {
    console.log('in MovieDetails')

    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.movieDetails);
    console.log('showing movie details', details)

    
    //function to return to movie list
    const sendHome = () => {
        history.push('/');
    }; //end sendHome

    return (
        <div>
            <h1 className="movieHeader">Details</h1>

            {/* button to return to MovieList */}
            <div className="addMovieBtn">
            <Button 
                variant="contained" 
                size="large"
                
                onClick={sendHome}>
                    Return to Movie List
            </Button>
            </div>



            { details[0] && (
                <div className="movieDetails">
                    <Grid container spacing={2} justify="center" className="movies">
                        <h3> {details[0].title} </h3>
                        <p> { details[0].description} </p>
                        <img src={details[0].poster} alt={details[0].title} />
                        <ul>
                        {details.map(movie => {
                            return (
                                <li>{movie.name}</li>
                            )
                        })}
                        </ul>
                    </Grid>
                </div>
            )}




        </div>
    )
}

export default MovieDetails;
