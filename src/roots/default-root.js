import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {SinglePageLayout} from '../layouts/single-page-layout'
export const Root = (props) => {
    return ( 
        <Router>
            <Route exact path="/" render={(props)=>{return(<SinglePageLayout {...props}/>)}}/> 
            {/* <Route exact path="/about" render={(props)=>{return(<About {...props}/>)}}/>  */}
        </Router> 
    );
}

