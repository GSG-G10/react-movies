
import React from "react";
import Nav from '../components/Nav/Nav';
import MovieList from '../components/MovieList';
import { getMovies } from "../utils/getMovies";
import { Loader } from "../components/Loader";

class Home extends React.Component{
    state={
        movies:[],
        isLoaded : false,  
        page: 1,
    }
  
    onSearch = (search) => { 

        this.setState({isLoaded: false});

        getMovies(search)
            .then(res => {
                this.setState({
                    isLoaded : true,
                    movies: res.data.movies,
                });
            }).catch(err => console.log);
    }
  
    onScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (clientHeight + scrollTop >= scrollHeight - 50) {

            this.setState((state) => {
                return { page: state.page + 1 };
            });

            getMovies("", this.state.page)
            .then(res => {
                this.setState((state) => {
                    return {
                        isLoaded : true,
                        movies: [...state.movies, ...res.data.movies],
                    };
                });
            }).catch(err => console.log);
    
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll)
        this.onSearch()
    }
  
  
    render = () => { 
      var {isLoaded , movies} = this.state
  
      
        return (
            <div>
                <Nav onSearch={this.onSearch}></Nav>
                {isLoaded ? <MovieList movies={movies} /> : <Loader />}
            </div>
        );
    }
  
}

export default Home;