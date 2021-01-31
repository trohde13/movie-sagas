import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { AspectRatioSharp } from '@material-ui/icons';



//Reducers


// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}; //end moviesReducer

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}; //end genresReducer

// Used to store the movie details
const movieDetails = (state = [], action) => {
    switch(action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}; //end movieDetails


//SAGAS
//generator function to GET all movies
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}; //end fetchAllMovies

//generator function to GET all genres
function* getGenres() {
    try {
        const response = yield axios.get('/api/genre');
        yield put({ type: 'SET_GENRES', payload: response.data })
    } catch (error) {
        console.log('error isn getting the genres', error);
    }
}; //end getGenres

//generator function to POST new movie to database
function* addNewMovie(action) {
    try {
       console.log('post new movie');
       const newMovie = action.payload;
       yield axios.post('/api/movie', newMovie);
       yield put({ payload: action.payload }) 
    } catch (error) {
        console.log('error in adding a new movie', error);
    }

}; // end addNewMovie

//generator function to GET movie details from database
function* fetchInfo(action) {
    try {
        const response = yield axios.get('/api/movie', action.payload);
        console.log('get movie by id:', movies.data);
        yield put({ type: 'SET_DETAILS', payload: response.data });

    } catch (error) {
        console.log('error in getting details', error);
    }
        
}; //end fetchInfo





// Create the watcherSaga generator function
function* watcherSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('ADD_NEW_MOVIE', addNewMovie);
    yield takeEvery('FETCH_INFO', fetchInfo)

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
