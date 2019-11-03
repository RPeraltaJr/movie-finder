import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/global/Navbar';
import Alert from './components/global/Alert';
import Search from './components/movie/Search';
import Movie from './components/movie/Movie';
import About from './pages/About';
import './App.scss';

function App() {

  const [ movie, setMovie ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ alert, setAlert ] = useState(null); // const alert = {icon: 'fas fa-info-circle', msg: 'This is a danger alert — check it out!'};

  const searchMovie = async (search) => {
    if( search.trim() !== '' ) { 
      setLoading(true);
      setAlert(null);
      const res = await axios.get(`https://omdbapi.com/?t=${search}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
      setMovie(res.data);
      setLoading(false);
    } 
  }

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // this.setState({ alert: { msg: msg, type: type }});
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Alert alert={alert} />

        <Switch>

          <Route exact path='/' render={props => (
              <Fragment>
                <Search searchMovie={searchMovie} setMovie={setMovie} showAlert={showAlert} showClear={ movie.Response == 'True' ? true : false } />
                <Movie movie={movie} loading={loading} /> 
              </Fragment>
            )} />
 
          <Route exact path='/about' component={About} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
