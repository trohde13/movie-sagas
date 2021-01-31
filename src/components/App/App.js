import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { Container, Paper, Grid } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {

  const theme = createMuiTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff',
      },
      // type: "dark",
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText:' #ffffff',
      },
      secondary: {
        light: '#ff4081',
        main: '#f50057',
        dark: '#c51162',
        contrastText:' #ffffff',
      },
      background: {
        paper: '#424242',
        default: '#303030',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
      <div className="App">
        <h1 className="appHeader">Neon Cinema</h1>
        <Router>  
          <Container maxWidth="lg">      
            <Route path="/" exact>
              <MovieList />
            </Route>        
          {/* Details page */}
            <Route path="/details">
              <MovieDetails />
            </Route>
          {/* Add Movie page */}
            <Route path="/addmovie">
              <AddMovie />
            </Route>
          </Container>
        </Router>
      </div>
      </Container>
    </ThemeProvider>
  );
}


export default App;
