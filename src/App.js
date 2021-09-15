import './App.css';
import React , { Component } from 'react';
import Nav from './components/Nav';

class App extends Component{

    state={
      items:[],
      isLoaded : false,  
    }


    onSearch = (value ) => { fetch(`https://crossorig.in/https://yts.am/api/v2/list_movies.json?sort_by=year&limit=15&query_term=${value||"" }`)
    .then(res => res.json())
    .then(json=>{
      this.setState({
        isLoaded : true,
        items: json,
      })
    });}

    componentDidMount(){
      this.onSearch()
    }


  render(){ 
    var {isLoaded , items} = this.state

    if(!isLoaded){
      return <div>Loading....</div>;
    }else{
          return (
            <div className="App">
              <Nav onSearch={this.onSearch}></Nav>
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
