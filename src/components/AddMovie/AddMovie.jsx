import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Box, Menu, MenuItem, Grid, Typography, FormControl, Input, InputLabel, Select, NativeSelect, OutlinedInput, TextField, Button, ButtonGroup, Icon, IconButton, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { ArrowForward, FavoriteBorder, SettingsEthernetRounded } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function AddMovie() {
    console.log('in AddMovie')
    

    const history = useHistory();
    const dispatch = useDispatch();

    const [movieTitle, setMovieTitle] = useState('');
    const [movieImage, setMovieImage] = useState('');
    const [description, setDescription] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [genre, setGenre] = useState('');

    const genreList = useSelector((store) => store.genresReducer)

    useEffect(() => dispatch({ type: 'GET_GENRES' }), []);

    //function to add new movie to database and return to movie list
    const handleAddMovie = (event) => {
        console.log('clicked handleAddMovie');
        event.preventDefault();
        //dispatch here
        dispatch({ 
            type: 'ADD_NEW_MOVIE', 
            payload: {movieTitle, movieImage, description, genre} 
        });
        setMovieTitle('');
        setMovieImage('');
        setDescription('');
        history.push('/');
    }; //end handleAddMovie

    //function to cancel adding a movie and return to movie list
    const sendHome = () => {
        history.push('/');
    }; //end sendHome

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }; //end handleOpenMenu

    const addGenre = (genreId) => {
        dispatch({ 
            type: 'ADD_NEW_MOVIE',
            payload: { }
         })
    }



    return (
        <div>
            <h1 className="movieHeader">Add A Movie</h1>
            <Box p={4} className="formBox">
                <form onSubmit={handleAddMovie}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Box mx={2} flexGrow={1}>
                        <FormControl variant="outlined">
                            <TextField  
                                id="outlined-basic" 
                                type="text" 
                                size="large"
                                label="movie title"
                                // value={movieTitle} 
                                onChange={(event) => setMovieTitle(event.target.value)} 
                                variant="outlined" />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}>
                        <FormControl variant="outlined">
                            <TextField  
                                id="outlined-basic"
                                type="text"
                                label="movie url" 
                                // value={movieImage} 
                                onChange={(event) => setMovieImage(event.target.value)} 
                                variant="outlined" />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}> 
                        <FormControl variant="outlined">
                            <TextField 
                                id="outlined-basic"
                                size="large" 
                                label="description"  
                                variant="outlined"
                                onChange={(event) => setDescription(event.target.value)} />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}>
                            <Button variant="outlined" onClick={handleOpenMenu}>
                                Genres
                             </Button>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                             >
                                <MenuItem onClick={() => addGenre(null)}>
                                    <em>none</em>
                                </MenuItem>
                                {genreList.map((genreItem) => {
                                    return (
                                        <MenuItem onClick={() => addGenre(genreItem.id)}>
                                            {genreItem.name}
                                        </MenuItem>
                                    );
                                })}
                                
                            {/* <InputLabel htmlFor="component-outlined">Genre</InputLabel>
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
                            </Select> */}
                        </Menu>
                        </Box>
                        <Box>
                        <ButtonGroup orientation="vertical">
                            <Button
                            size="large"
                            variant="contained"
                            startIcon={<DeleteIcon />}
                            onClick={sendHome}>
                                CANCEL
                            </Button>
                            <Button
                            size="large"
                            variant="contained"
                            endIcon={<SaveIcon />}
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