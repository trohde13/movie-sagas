import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Box, Grid, Typography, FormControl, Input, InputLabel, Select, NativeSelect, OutlinedInput, TextField, Button, ButtonGroup, IconButton, Divider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import { ArrowForward, FavoriteBorder, SettingsEthernetRounded } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function AddMovie() {
    console.log('in AddMovie')
    

    const history = useHistory();
    const dispatch = useDispatch();

    const [movieTitle, setMovieTitle] = useState('');
    const [movieImage, setMovieImage] = useState('');
    const [genre, setGenre] = useState('');

    //function to add new movie to database and return to movie list
    const handleAddMovie = () => {
        console.log('clicked handleAddMovie');
        event.preventDefault();
        //dispatch here
        setMovieTitle('');
        setMovieImage('');
        history.push('/');
    }; //end handleAddMovie

    //function to cancel adding a movie and return to movie list
    const sendHome = () => {
        history.push('/');
    }





    return (
        <div>
            
            <Box p={4}>
                <form onSubmit={handleAddMovie}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Box mx={2} flexGrow={1}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">movie title</InputLabel>
                            <OutlinedInput id="component-outlined" type="text" value={movieTitle} onChange={(event) => setMovieTitle(event.target.value)} variant="outlined" />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">movie url</InputLabel>
                            <OutlinedInput id="component-outlined" type="text" value={movieImage} onChange={(event) => setMovieImage(event.target.value)} variant="outlined" />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}> 
                        <FormControl variant="outlined">
                            <TextField id="outlined-basic" label="description"  variant="outlined" />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}>
                        <FormControl variant="oulined">
                            <InputLabel htmlFor="component-outlined">Genre</InputLabel>
                            <Select
                                variant="outlined"
                                value={genre}
                                onChange={(event) => setGenre(event.target.value)}
                                label="Genre"
                            >
                                <option aria-label="None" value="" />
                                <option value={'Adventure'}>Adventure</option>
                                <option value={'Animated'}>Animated</option>
                                <option value={'Biographical'}>Biographical</option>
                                <option value={'Comedy'}>Comedy</option>
                                <option value={'Disaster'}>Disaster</option>
                                <option value={'Drama'}>Drama</option>
                                <option value={'Epic'}>Epic</option>
                                <option value={'Fantasy'}>Fantasy</option>
                                <option value={'Musical'}>Musical</option>
                                <option value={'Romantic'}>Romantic</option>
                                <option value={'Science Fiction'}>Science Fiction</option>
                                <option value={'Space-Opera'}>Space-Opera</option>
                                <option value={'Superhero'}>Superhero</option>
                            </Select>
                        </FormControl>
                        </Box>
                        <Box>
                        <ButtonGroup>
                            <Button
                            size="large"
                            variant="contained"
                            color="secondary"
                            onClick={sendHome}>
                                CANCEL
                            </Button>
                            <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={handleAddMovie}>
                                SAVE
                            </Button>
                        </ButtonGroup>
                        </Box>
                    </Box>   
                </form>
            </Box>
            
        </div>

    )

}; //end AddMovie

export default AddMovie;