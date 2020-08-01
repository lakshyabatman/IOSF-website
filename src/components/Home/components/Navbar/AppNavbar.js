import React from 'react'
import "./navbar.css"

import { Navbar } from "react-bulma-components";


class AppNavbar extends React.Component{

  render(){
    return(
      <div>
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
