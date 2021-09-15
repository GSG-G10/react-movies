import './App.css';
import React , { Component } from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
class App extends Component{

    state={
      movies:[],
      isLoaded : false,  
    }

    onSearch = (value ) => { 
      fetch(`https://crossorig.in/https://yts.am/api/v2/list_movies.json?sort_by=year&limit=20&query_term=${value||"" }`)
    .then(res => res.json())
    .then(json=>{
      this.setState({
        isLoaded : true,
        movies: json.data.movies,
      })
    });}

    componentDidMount(){
      this.onSearch()
    }


  render(){ 
    var {isLoaded , movies} = this.state

    

    if(!isLoaded){
      return <div>Loading....</div>;
    }else{
          return (
            <div>
              <Nav onSearch={this.onSearch}></Nav>
              <div className="container mx-auto px-4 pt-8">
                <MovieList movies={movies}/>
              </div>
            </div>
          );
        }
    }

  }
 

export default App;
