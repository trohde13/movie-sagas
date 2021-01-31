import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
  } from '@material-ui/core';

import { Grid } from '@material-ui/core';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.moviesReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1 className="movieHeader">Now Playing!</h1>
            <Grid container spacing={4} justify="center" className="movies">
                {movies.map(movie => {
                    return (
                        <Grid item key={movie.id} >
                            <Card elevation={4} align="center" className="movieCard">
                                <CardContent>
                                    <Box minHeight={2} maxWidth={200}>
                                        <Typography variant="body1" align="center" >
                                            <h3>{movie.title}</h3>
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActionArea>
                                    <Box paddingTop={1} paddingLeft={4} paddingRight={4} paddingBottom={2}></Box>
                                        <img src={movie.poster} alt={movie.title}/>
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