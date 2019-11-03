import React, { useState } from 'react'
import './Search.scss'

export default function Search({ searchMovie, setMovie, showAlert, showClear }) {

    const [ searchTitle, setSearchTitle ] = useState('');
    const [ searchYear, setSearchYear ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if( searchTitle === '' ) {
            showAlert('Please enter something.', 'danger');
        } else {
            searchMovie(searchTitle); // passing up the value through props
            setSearchTitle(''); // empty the form after submit
        }
    }

    const clearMovie = () => setMovie([]);

    const onChange = (e) => {
        setSearchTitle( e.target.value ); 
        setSearchYear( e.target.value ); 
    }

    return (
        <section className="search">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <h2 className="font-weight-light">Search</h2>
                        <form className="form" autoComplete="false" onSubmit={onSubmit}>  
                            <div className="form-row">
                                <div className="col-5">
                                    <label htmlFor="searchTitle" className="sr-only">Title</label>
                                    <input type="search" name="search" id="searchTitle" className="form-control" placeholder="Search by Title" value={searchTitle} onChange={onChange} />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="searchYear" className="sr-only">Year</label>
                                    <input type="number" name="searchYear" id="searchYear" className="form-control" placeholder="Year" value={searchYear} onChange={onChange} maxlength="4" />
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
