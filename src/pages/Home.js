import React, { Fragment } from 'react'
import Search from './../components/movies/Search'
import Movies from './../components/movies/Movies'

export default function Home() {
    return (
        <Fragment>
            <Search />
            <Movies />
        </Fragment>
    )
}
