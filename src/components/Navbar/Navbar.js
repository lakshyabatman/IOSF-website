import React from 'react'
import "./navbar.css"

import M from "materialize-css"


class Navbar extends React.Component{

  componentDidMount(){
    let sidenav = document.querySelectorAll(".sidenav")
    M.Sidenav.init(sidenav);
  }

  render(){
    return(
      <div>
        <div className="navbar-fixed ">
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
          
        </div>


      </div>
      
    )
  }
}

export default Navbar;
