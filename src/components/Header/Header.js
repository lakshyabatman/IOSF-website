import React from 'react';
import './header.css';
import Navbar from '../Navbar/Navbar';

class Header extends React.Component{
  render(){
    return(
      <header>
        <Navbar />
        <div className="hero__container row">
          <div className="container">
            <div className="hero__heading__container  col l7 s12 m12">
            <h3 className="hero__heading">Promoting open source one step at a time</h3>
              <p className="hero__sub__heading">At IOSF we have taken a pledge to make open source contribution simplified. Join us in our journey and let's create effective products on our way.</p>
              <div className="hero_btn_container">
                <button className='hero__joinus__btn btn-large z-depth-0'>JOIN US</button>
                <button className="hero__ourproducts__btn btn-large z-depth-0">OUR PRODUCTS</button>
              </div>
            </div>
          </div>
        </div>
        <section className="together__lets__section">
          <div className="together__lets__container row">
            <div className="container">
              <h4 className="section__title">Together Let's</h4>
            <div className="together__lets__card card-panel z-depth-0 col l4 m12 s12">
                <img src="/img/learn_avatar.png" alt=""/>
                <h5>Learn</h5>
                <p>There's always a room for learning here. We are contantly learning new skills and concepts at all levels which help us increase the quality of our products</p>
              </div>
              <div className=" together__lets__card card-panel z-depth-0 col l4 m12 s12">
                <img src="/img/contribute_avatar.png" alt=""/>
                <h5>Contribute</h5>
                <p>An active community of contributors that are passionate about product development and want to create something big.</p>
              </div>
              <div className="together__lets__card card-panel z-depth-0 col l4 m12 s12">
                <img src="/img/mentor_avatar.png" alt=""/>
                <h5>Mentor</h5>
                <p>IOSF loves mentoring sessions. It gives us an opportunity to share knowledge amongst fellow developers and encourage them into product development.</p>
              </div>
            </div>
          </div>
        </section>
      </header>
    )
  }
}

export default Header;