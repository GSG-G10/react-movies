import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = (props) => {

    const movies = props.movies && props.movies.map((movie) => {
        return <MovieCard 
                    key={movie.id}
                    image={movie.large_cover_image}
                    name={movie.title}
                    rating={movie.rating}
                    year={movie.year} 
                    genres={movie.genres}
                    url={movie.url}
                />
    });

    return (
        <div className="container mx-auto px-4 pt-8">
            <div className="cards-list">
                {movies}
            </div>
        </div>
    );
}

export default MovieList;