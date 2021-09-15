import './App.css';
import React, { Component } from 'react';

class App extends Component{

    state={
      items:[],
      isLoaded : false,  
    }
    componentDidMount(){
      fetch('https://crossorig.in/https://yts.am/api/v2/list_movies.json')
          .then(res => res.json())
          .then(json=>{
            console.log(json);
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
            <div className="container mx-auto px-4 pt-16">
              {/* <div className="cards-list">
              <MovieCard image="https://image.tmdb.org/t/p/w500//CGJAj5kNWQZypNgUSTTQrFlnG.jpg" name="Jurassic Hunt" rating="6" year="2020" genres={['Action', 'Crime']}/>
              <MovieCard image="https://image.tmdb.org/t/p/w500//xeItgLK9qcafxbd8kYgv7XnMEog.jpg" name="Shang-Chi and the Legend of the Ten Rings" rating="6.5" year="2020" genres={['Action', 'Crime']}/>
              <MovieCard image="https://image.tmdb.org/t/p/w500//kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg" name="The Suicide Squad" rating="6" year="2020" genres={['Action', 'Crime']}/>
              <MovieCard image="https://image.tmdb.org/t/p/w500//hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg" name="Don't Breathe 2" rating="6" year="2020" genres={['Action', 'Crime']}/>

              </div> */}
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
