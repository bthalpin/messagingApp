import React from 'react';
import './Navigation.css';
import Mail from "../../images/mail-outline.png";
import Home from "../../images/home.png";

const Navigation = ({onRouteChange, isSignedIn,route})=>{
    if (isSignedIn){
        return (
            <div>
                {route==='home'
                ?<div className = 'navLeft'> 
                <p onClick = {() => onRouteChange('mail')}><img src = {Mail} alt="Mail" width = "30rem" ></img></p>
                </div>
                :<div className = 'navLeft'> 
                <p onClick = {() => onRouteChange('home')}><img src = {Home} alt="Home" width = "30rem" ></img></p>
                </div>
                }
              
                <div className = "headcontainer">
                    <h1 className = "title">SOCIALLY DISTANCED</h1>
                </div>
                <nav className = "nav">
                
                
                <p onClick = {() => onRouteChange('Sign In')} className = 'navElement'>Sign Out</p>
            </nav>
            </div>
            
        )
    }else {
        return (
            <div className = "headcontainer">
                    <h1 className = "title">SOCIALLY DISTANCED</h1>
            </div>
            // <nav className = "nav">
            //     <p onClick = {() => onRouteChange('Sign In')} className = 'navElement'>Sign In</p>
            //     <p onClick = {() => onRouteChange('Register')} className = 'navElement'>Register</p>
            // </nav>
        )
            
            
        }
}

export default Navigation;