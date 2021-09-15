import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {

    const movies = props.movies.map((movie) => {
        return <MovieCard 
                    image={movie.image}
                    name={movie.name}
                    rating={movie.rating}
                    year={movie.year} 
                    genres={movie.genres}
                />
    });

    return (
        <div className="cards-list">
            {movies}
        </div>
    );
}

export default MovieList;