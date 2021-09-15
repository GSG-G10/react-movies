import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {

    const movies = props.movies && props.movies.map((movie) => {
        return <MovieCard 
                    key={movie.id}
                    image={movie.large_cover_image}
                    name={movie.title}
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