import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Landing.css';
import Button from 'react-bootstrap/Button';
//import { NavLink } from 'react-router-dom';
//import logoshesha from './images/logoshesha.png';


export const Landing = () => {
    return (<>
        <div className="bg">
        <h1 className="text-center text-light my-5" style={{position:"relative",top:"200px",}}>Welcome on Our Food Recipe Website<br/><span style={{color:"whitesmoke",fontSize:"25px",}}>We Hope You Enjoy</span></h1>
        <p className="text-center text-light my-5"> </p>
        <NavLink to="/Register"><Button variant="outline-light" style={{ position: "relative", top: "250px", left: "40%", fontWeight:"600", }}>Sign Up</Button>{' '}</NavLink>
        <NavLink to="/Login"><Button variant="outline-light" style={{ position: "relative", top: "250px", left: "50%", fontWeight:"600", }}>LogIn</Button>{' '}</NavLink> 
        </div>
    </>)
}
