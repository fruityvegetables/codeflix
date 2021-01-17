import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    //run a piece of code when row loads
    // if the brackets are empty, it will only run once when the page loads
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/* {row_posters} */}

                {movies.map(movie => {
                    return <img src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}/>
                })}
            </div>
        </div>
    )
}

export default Row;