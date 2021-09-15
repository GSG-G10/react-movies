import React from "react";
import "./Nav.css";



class Nav extends React.Component{
    state={}


    render(){
        return(
            <nav className="nav">
                <div className="container mx-auto px-4 py-6 flex">
                    <div>
                        <h1>React Movies</h1>
                    </div>
                    <div>
                        <input type="text" className="search" placeholder="Search" onChange={(e) =>this.props.onSearch(e.target.value)} />
                    </div>

                </div>
            </nav>
        )
    }
}

export default Nav ;



