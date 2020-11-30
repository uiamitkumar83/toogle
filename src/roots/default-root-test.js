import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {HandlePageOnClick} from '../webutils/webutils'
export const Root = (props) => {
    return ( 
        <Router>
            <Route exact path="/" render={(props)=>{return(<Home {...props}/>)}}/> 
            <Route exact path="/about" render={(props)=>{return(<About {...props}/>)}}/> 
        </Router> 
    );
}

const Home = (props)=>{
    return(
    <div style={{minHeight:'200vh'}}>
          <span style={{cursor:'pointer'}} onClick={()=>{HandlePageOnClick('/about', props)}}>Home</span>
    </div>
    );
}
const About = (props)=>{
    return(
    <div style={{minHeight:'200vh'}}>
           <span style={{cursor:'pointer'}} onClick={()=>{HandlePageOnClick('/', props)}}>About</span>
    </div>
    );
}