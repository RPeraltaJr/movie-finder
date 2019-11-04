import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/global/Navbar';
import Search from './components/movie/Search';
import Movie from './components/movie/Movie';
import About from './pages/About';
import './App.scss';

function App() {

  const [ movie, setMovie ] = useState({});
  const [ loading, setLoading ] = useState(false);

  const searchMovie = async (searchTitle, searchYear) => {
    if( searchTitle.trim() !== '' ) { 
      setLoading(true);
      const res = await axios.get(`https://omdbapi.com/?t=${searchTitle}&y=${searchYear}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
      setMovie(res.data);
      setLoading(false);
      console.log(res.data);
    } 
  }

  return (
    <Router>
      <div>
        <Navbar />
        

        <Switch>

          <Route exact path='/' render={props => (
              <Fragment>
                <Search searchMovie={searchMovie} setMovie={setMovie} showClear={ movie.Response === 'True' ? true : false } />
                <Movie movie={movie} loading={loading} /> 
                { }
              </Fragment>
            )} />
 
          <Route exact path='/about' component={About} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
