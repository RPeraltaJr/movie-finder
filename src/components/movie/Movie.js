import React from 'react'
import Spinner from './../global/Spinner'

export default function Movie({ movie, loading }) {

    const { 
        Title, 
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Poster,
        imdbRating,
        BoxOffice,
        Production,
        Response
    } = movie;

    if(loading) { 
        return <Spinner />
    } else {
        return (
            movie != '' && Response == 'True' && (
                <div className="container my-4">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <img src={Poster} alt={`${Title} poster`} className="img-fluid mb-3" />
                                    <h2 className="font-weight-light">{ Title }</h2>
                                    <h5 className="font-weight-light">
                                        <span className="badge badge-secondary mr-2">{ Rated }</span>
                                        { Year } &bull; { Genre } &bull; { Runtime }
                                    </h5>
                                    <p>{ Plot }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }

}
