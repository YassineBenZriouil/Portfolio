import React from "react";
import { useState, useEffect } from "react";

function Home() {
    const [movies, setMovies] = useState([]);

    const Api =
        "https://api.themoviedb.org/3/discover/movie?api_key=8dc69cc265c5c8924c21ede4b9ddc208";

    useEffect(() => {
        fetch(Api)
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    }, []);
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Home;
