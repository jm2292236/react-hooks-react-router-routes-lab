import React from "react";
import { directors } from "../data";

function Directors() {
    const directorsToDisplay = directors.map(director => {
        return <div key={director.name}>
            <h1>Name: {director.name}</h1>
            <p>Movies:</p>
            <ul>
                {director.movies.map(movie => {
                    return <li key={movie}>{movie}</li>
                })}
            </ul>
        </div>
    })

    return (
        <div>
            <h1>Directors Page</h1>
            {directorsToDisplay}
        </div>
    )
}

export default Directors;
