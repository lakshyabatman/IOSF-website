import React from 'react'
import "./navbar.css"

import { Navbar } from "react-bulma-components";
import NavModal from './components/NavModal';


class AppNavbar extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      showNavModal: false,
     }
  }

  openNavModal = () => { this.setState( { showNavModal: true })}
  closeNavModal = () => { this.setState( { showNavModal: false })}

  render(){
    return(
      <div>
        <Navbar fixed="top">
          <Navbar.Brand>
            <Navbar.Item>
              Indian Open Source Foundation
            </Navbar.Item>
            <Navbar.Burger onClick={this.openNavModal} />
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
        
        <NavModal showNavModal={this.state.showNavModal} closeNavModal={this.closeNavModal} />
      </div>
      
    )
  }
}

export default AppNavbar;
