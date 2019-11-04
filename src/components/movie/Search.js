import React, { useState } from 'react'
import Alert from './../global/Alert'
import PropTypes from 'prop-types';
import './Search.scss'

export default function Search({ searchMovie, setMovie, showClear }) {

    const [ searchTitle, setSearchTitle ] = useState('');
    const [ searchYear, setSearchYear ] = useState('');
    const [ alert, setAlert ] = useState(null); // const alert = {icon: 'fas fa-info-circle', msg: 'This is a danger alert — check it out!'};

    const showAlert = (msg, type) => {
        setAlert({ msg, type });
        setTimeout(() => setAlert(null), 5000);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( searchTitle === '' ) {
            showAlert('Please enter a title.', 'danger');
        } else {
            searchMovie(searchTitle, searchYear); // passing up the value through props
            // empty the form after submit
            setSearchTitle('');
            setSearchYear(''); 
        }
    }

    const clearMovie = () => setMovie({});

    const onChangeTitle = (e) => {
        setSearchTitle( e.target.value ); 
    }

    const onChangeYear = (e) => {
        setSearchYear( e.target.value ); 
    }

    return (
        <section className="search">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <Alert alert={alert} />
                        <h2 className="font-weight-light">Search a Movie</h2>
                        <form className="form" autoComplete="false" onSubmit={onSubmit}>  
                            <div className="form-row">
                                <div className="col-5">
                                    <label htmlFor="searchTitle" className="sr-only">Title</label>
                                    <input type="search" name="search" id="searchTitle" className="form-control" placeholder="Enter a Title..." value={searchTitle} onChange={onChangeTitle} />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="searchYear" className="sr-only">Year</label>
                                    <input type="search" name="searchYear" id="searchYear" className="form-control" placeholder="Year" value={searchYear} onChange={onChangeYear} maxLength="4" />
                                </div>
                                <div className="col-5">
                                    <button type="submit" className="btn btn-dark mr-2">Submit</button>
                                    { showClear && <button className="btn btn-link text-dark" onClick={clearMovie}>Clear</button>}
                                </div>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

Search.propTypes = {
    searchMovie: PropTypes.func.isRequired,
    setMovie: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}