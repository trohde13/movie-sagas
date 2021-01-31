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
import { useHistory } from 'react-router-dom';


function MovieDetails() {
    console.log('in MovieDetails')

    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.movieDetails);

    useEffect(() => {
        dispatch({ type: 'FETCH_INFO' });
    }, []);

    //function to return to movie list
    const sendHome = () => {
        history.push('/');
    }; //end sendHome

    return (
        <div>
            <h1 className="movieHeader">Details</h1>
            <div className="addMovieBtn">
            <Button 
                variant="contained" 
                size="large"
                
                onClick={sendHome}>
                    Return to Movie List
            </Button>
            </div>
            <div>
                {details.map(details => {
                    <h2>{details.title}</h2>
                    <img 
                        src={details.poster}
                        alt={details.title} 
                    />
                    <h4>Genre: {details.name}</h4>
                    <body1>{details.description</body1>
                })}
            </div>

        </div>
    )
}

export default MovieDetails;
