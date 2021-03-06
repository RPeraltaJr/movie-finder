import React from 'react'
import Spinner from './../global/Spinner'
import StarRatings from 'react-star-ratings'
import PropTypes from 'prop-types'
import './Movie.scss'

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
            movie != '' && Response === 'True' && (
                <section className="movie">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                { Poster != 'N/A' && (<img src={Poster} alt={`${Title} poster`} className="img-fluid mb-3" />) }
                                <h2 className="font-weight-light">{ Title }</h2>
                                <StarRatings
                                    rating={imdbRating/2}
                                    starRatedColor="#FFC108"
                                    numberOfStars={5}
                                    starDimension="25px"
                                    starSpacing="3px"
                                    name='rating'
                                    />
                                <h5 className="font-weight-light mt-2">
                                    <span className="badge badge-secondary mr-2">{ Rated }</span>
                                    { Year } &bull; { Genre } &bull; { Runtime }
                                </h5>
                                { Plot != 'N/A' && (<p>{ Plot }</p>) }
                                <hr />
                                { Actors && (<p><strong>Cast:</strong> {Actors}</p>)}
                                { Director && (<p><strong>Director(s):</strong> {Director}</p>)}
                                { Writer && (<p><strong>Writer(s):</strong> {Writer}</p>)}
                                { BoxOffice && (<p><small>Box Office: {BoxOffice}</small></p>)}
                            </div>
                        </div>
                    </div>
                </section>
            )
        )
    }

}

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
}