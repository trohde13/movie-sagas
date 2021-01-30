import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Box, Typography, FormControl, Input, InputLabel, OutlinedInput, TextField, Button, Divider } from '@material-ui/core';
import { ArrowForward, FavoriteBorder } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function AddMovie() {
    console.log('in AddMovie')

    const history = useHistory();
    const dispatch = useDispatch();

    const [movieTitle, setMovieTitle] = useState('');
    const [movieImage, setMovieImage] = useState('');

    const handleAddMovie = () => {
        console.log('clicked handleAddMovie');
        event.preventDefault();

        setMovieTitle('');
        setMovieImage('');
        history.push('/');
    }; //end handleAddMovie

    const sendHome = () => {
        history.push('/');
    }





    return (
        <div>
            <form onSubmit={handleAddMovie}>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">movie title</InputLabel>
                    <OutlinedInput id="component-outlined" type="text" value={movieTitle} onChange={(event) => setMovieTitle(event.target.value)} variant="outlined" />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">movie url</InputLabel>
                    <OutlinedInput id="component-outlined" type="text" value={movieImage} onChange={(event) => setMovieImage(event.target.value)} variant="outlined" />
                </FormControl>
                <FormControl variant="outlined">
                    <TextField id="outlined-basic" label="description"  variant="outlined" />
                </FormControl>
                <FormControl></FormControl>
                <Button
                variant="contained"
                color="secondary"
                onClick={sendHome}
                >CANCEL</Button>
                <Button
                variant="contained"
                color="primary"
                onClick={handleAddMovie}
                >SAVE</Button>
            </form>
        </div>

    )

}; //end AddMovie

export default AddMovie;