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

    const genreList = useSelector((store) => store.genresReducer)

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    //pulling in genre data
    useEffect(() => {
        dispatch({ type: 'GET_GENRES' })
    }, []);


    //function to update state from input fields
    const handleChange = (key, event) => {
        console.log('in handleChange')

        switch(key){
            case 'title':
                setNewMovie({...newMovie, title: event.target.value})
                break;
            case 'poster':
                setNewMovie({...newMovie, poster: event.target.value})
                break;
            case 'description':
                setNewMovie({...newMovie, description: event.target.value})
                break;
            case 'genre':
                setNewMovie({...newMovie, genre_id: event.target.value})
                break;
        }
    }

    //function to add new movie to database and return to movie list
    const handleAddMovie = (event) => {
        console.log('clicked handleAddMovie');
        event.preventDefault();
        //dispatch here
        dispatch({ 
            type: 'ADD_NEW_MOVIE', 
            payload: newMovie 
        });
        setNewMovie({
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        })

        history.push('/');
    }; //end handleAddMovie

    
    //function to cancel adding a movie and return to movie list
    const sendHome = () => {
        history.push('/');
    }; //end sendHome

 


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
                                value={newMovie.title} 
                                onChange={(event) => handleChange('title', event)} 
                                variant="outlined" />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}>
                        <FormControl variant="outlined">
                            <TextField  
                                id="outlined-basic"
                                size="large"
                                type="text"
                                label="movie url" 
                                value={newMovie.poster} 
                                onChange={(event) => handleChange('poster', event)} 
                                variant="outlined" />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}> 
                        <FormControl variant="outlined">
                            <TextField 
                                id="outlined-basic"
                                size="large" 
                                type="text"
                                label="description"  
                                variant="outlined"
                                value={newMovie.description}
                                onChange={(event) => handleChange('description', event)} />
                        </FormControl>
                        </Box>
                        <Box mx={2} flexGrow={1}>
                            <label htmlFor="genre">Genre:</label>
                            <Select
                                name="genre"
                                id="genre"
                                value={newMovie.genre}
                                onChange={(event) =>handleChange('genre', event)}>
                                    <option value="" disabled>Choose genre:</option>
                                {genreList.map((genre) => {
                                    return (
                                        <option value={genre.id} key={genre.id}>{genre.name}</option>
                                        );
                                    })}
                            </Select>
                                
                                                            
                                
                                
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