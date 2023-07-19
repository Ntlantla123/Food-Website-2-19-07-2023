import React, { useRef } from "react";
//import { FaBars, FaTimes } from 'react-icons/fa';
import './TopNav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoshesha from './images/logoshesha.png';

export const  TopNav = () => {
 const navRef = useRef();

 const showNavbar = () => {
  navRef.current.classList.toggle("responsive_nav");
 }

  return (

    /* Navbar Section */
    <Navbar collapseOnSelect expand="lg" className="bg-body-green" style={{position:"relative",width:"125%",backgroundColor:"green",}}>
    <Container>
      <Navbar.Brand href="/home"><img src={logoshesha}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/Home" style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Home</Nav.Link>
          <Nav.Link href="/Lessons"style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Lessons</Nav.Link>
          <Nav.Link href="/Recipes"style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Recipes</Nav.Link>
          <Nav.Link href="/"style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Articles</Nav.Link>
          <NavDropdown title="About"  id="collasible-nav-dropdown"style={{fontSize:"1.2rem",fontWeight:"600",color:"white",position:"relative",left:"20%",}}>
            <NavDropdown.Item href="/About">About Shehsha</NavDropdown.Item>
            <NavDropdown.Item href="/FoodService">
              About Food Service
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes" style={{color:"whitesmoke",fontSize:"1.2rem",fontWeight:"600",}}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}






































































//import React, { useEffect, useRef, useState } from 'react';
//import { NavLink,useLocation } from 'react-router-dom';
//import {UserProfile} from "./UserProfile"
//import './TopNav.css';

//import profilepic from './images/profilepic.png';


//export const TopNav = () => {
 // const navigation = [
   // { name: 'Home', href: '/home' },
   // { name: 'Lessons', href: '/lessons' },
   // { name: 'Recipes', href: '/Recipes' },
   // { name: 'Categories', href: '/' },
 // ]

 // const landingEl = useRef();
 // const [loading, setloading] = useState(false);
 // const location = useLocation();

 // useEffect(() => {
    //setloading(true);
    //const timer = setTimeout(()=> {
    // setloading(false);

    //}, 2000); // Simulating a loading delay of 2 seconds
   // return () => clearTimeout(timer);
   //{loading && <div>Loading...</div>}
  //}, [location]);
  

  //return (

    //<nav className="TopNav">
    // <a href='/Home'><img className="TopNav_logo" src={"images/shesha_logo.png"} alt="" style={{ height: "90px", top: "20px", }} /></a>
    //  {navigation.map((item) => (
      //  <NavLink key={item.name} to={item.href} className={({ isActive }) => { return `TopNav_a ${isActive ? 'TopNav_a active' : ''}` }}>{item.name}</NavLink>
      //))}
      
       

      //{/*<img src={profilepic} alt="profilepic.png" style={{ position: "relative", left: "27%", top: "20px", borderRadius: "30%", }}></img>*/}
      //<UserProfile/>
    //</nav>
 // )
//}
