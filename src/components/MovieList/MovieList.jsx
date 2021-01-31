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
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <Grid container spacing={4} justify="center" className="movies">
                {movies.map(movie => {
                    return (
                        <Grid item key={movie.id} >
                            <Card elevation={4}>
                                <CardContent>
                                    <Box minHeight={4}>
                                        <Typography variant="body1" align="center" >
                                            <h3>{movie.title}</h3>
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActionArea>
                                    <Box paddingTop={2} paddingLeft={4} paddingRight={4} paddingBottom={4}></Box>
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