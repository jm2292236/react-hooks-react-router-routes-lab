import React from "react";
import { movies } from "../data";

function Movies() {
    
    const moviesToDisplay = movies.map(movie => {
        return <div key={movie.title}>
            <h1>Name: {movie.title}</h1>
            <p>Title: {movie.time}</p>
            <p>Genres:</p>
            <ul>
                {movie.genres.map(genre => 
                    <li key={genre}>{genre}</li>
                )}
            </ul>
        </div>
    })

    return (
        <div>
            <h1>Movies Page</h1>
            {moviesToDisplay}
        </div>
    )
}

export default Movies;
