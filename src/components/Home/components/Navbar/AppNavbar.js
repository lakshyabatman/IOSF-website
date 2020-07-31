import React from 'react'
import "./navbar.css"

import { Navbar } from "react-bulma-components";


class AppNavbar extends React.Component{

  render(){
    return(
      <div>
        {/* <div className="navbar-fixed ">
          <nav>
            <div className="nav nav-wrapper z-depth-1-half white">
              <ul className="right hide-on-med-and-down">
                <li><a href="">Learning Paths</a></li>
                <li><a href="">Our Products</a></li>
                <li><a href="">Blogs</a></li>
                <li><a className="nav__joinus__btn btn z-depth-0" href="">JOIN US</a></li>
              </ul>
              
              <ul className="show-on-med-and-up">
                <li><a href="#" data-target="slide-out" class="sidenav-trigger"><i class="fas fa-bars"></i></a></li>
              </ul>
            </div>
          </nav>
        </div>
        
        <div>
          <ul id="slide-out" className="sidenav">
            <li><a href="">Learning Paths</a></li>
            <li><a href="">Our Products</a></li>
            <li><a href="">Blogs</a></li>
            <li><a className="nav__joinus__btn btn z-depth-0" href="">JOIN US</a></li>
          </ul>
          
        </div> */}

        <Navbar fixed="top">
          <Navbar.Brand>
            <Navbar.Item>
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container position="end">
            <Navbar.Item href="#">
              Learning Paths
            </Navbar.Item>
            <Navbar.Item href="#">
              Our Products
            </Navbar.Item>
            <Navbar.Item href="#">
              Blogs
            </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>

      </div>
      
    )
  }
}

export default AppNavbar;
