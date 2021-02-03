import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography,
  } from '@material-ui/core';

import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList(movie) {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.moviesReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const addMovieBtn = () => {
        history.push('/addmovie');
    };

    const getMovieInfo = (id) => {
        //event.preventDefault();
        dispatch({ type: 'FETCH_INFO', payload: id})

        //send to /details by id number
        history.push(`/details/${id}`);
    }

    return (
        <main>
            <h1 className="movieHeader">Now Playing!</h1>
            <div className="addMovieBtn">
            <Button 
                variant="contained" 
                size="large"
                
                onClick={addMovieBtn}>
                    Add A Movie
            </Button>
            </div>
            <Grid 
                container
                spacing={2} 
                justify="center" 
                className="movies"
            >
                {movies.map(movie => {
                    return (
                        <Grid item key={movie.id} >
                            <Card align="center" className="movieCard">
                                <CardContent>
                                    {/* <Box minHeight={2} maxWidth={200}> */}
                                        <Typography variant="body2" align="center" color="secondary">
                                            <h3>{movie.title}</h3>
                                        </Typography>
                                    {/* </Box> */}
                                </CardContent>
                                <CardActionArea className="poster" >
                                    {/* <Box paddingTop={1} paddingLeft={1} paddingRight={1} paddingBottom={1}></Box> */}
                                        <img
                                        src={movie.poster} 
                                        alt={movie.title}
                                        onClick={() => getMovieInfo(movie.id)}
                                        />
                                    {/* </Box> */}
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </main>

    );
}

export default MovieList;