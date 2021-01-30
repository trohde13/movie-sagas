import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#dd33fa',
      }
    },
  });

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
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
  );
}


export default App;
