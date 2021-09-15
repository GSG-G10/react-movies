import React from "react";
import "./Nav.css";



class Nav extends React.Component{
    state={}


    render(){
        return(
            <input type="text" onChange={(e) =>this.props.onSearch(e.target.value)} />
        )
    }
}

export default Nav ;



