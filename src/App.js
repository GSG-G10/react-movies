import './App.css';
import React from 'react';
import { Component } from 'react';

class App extends Component{

    state={
      items:[],
      isLoaded : false,  
    }
    componentDidMount(){
      fetch('https://crossorig.in/https://yts.am/api/v2/list_movies.json')
          .then(res => res.json())
          .then(json=>{
            this.setState({
              isLoaded : true,
              items: json,
            })
          });

    }


  render(){ 
    var {isLoaded , items} = this.state

    if(!isLoaded){
      return <div>Loading....</div>;
    }else{
          return (
            <div className="App">
                <ul>
                  {items.data.movies.map(movie =>
                   
                    <ul key={movie.id} className="card">
                      <h3>{movie.title}</h3>
                      <p> IMBD {movie.imdb_code}</p>
                      <a href={movie.url}> Link</a>

                      <p>{movie.description}</p>
                      <img src={movie.medium_cover_image} alt="img" />
                      
                    </ul>
                     )};
                </ul>
            </div>
          );
        }
    }

  }
 

export default App;
