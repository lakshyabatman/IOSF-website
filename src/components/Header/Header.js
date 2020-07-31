import React from 'react';
import './header.css';
import { Container, Content, Button, Section, Card, Columns } from 'react-bulma-components';

import AppNavbar from '../Navbar/AppNavbar';

class Header extends React.Component{
  render(){
    return(
      <>
        <header>
          <AppNavbar />
            <Container>
              <div className="header__heroContainer">
                <Content>
                  <div className="header__heroContent">
                    <h2 className="header__heroHeading">Promoting open source, one step at a time</h2>
                    <p className="header__heroSubheading">At IOSF we have taken a pledge to make open source contribution simplified. Join us in our journey and let's create effective products on our way.</p>
                  </div>
                  <div className="header__btnContainer">
                    <Button className="header__heroJoinUsBtn" size="medium">JOIN US</Button>
                    <Button className="header__heroOurProductsBtn" size="medium">OUR PRODUCTS</Button>
                  </div>
                </Content>
              </div>
            </Container>
        </header>
        <Section>
          <Container>
            <Content>
              <h3 className="section__title togetherLetsTitle">Together Let's</h3>
            </Content>
            <Columns>
              <Columns.Column>
                <Card>
                  <Card.Content>
                    <Content>
                      <img src="/img/learn_avatar.png" alt=""/>
                      <h3>Learn</h3>
                      <p>There's always a room for learning here. We are contantly learning new skills and concepts at all levels which help us increase the quality of our products.</p>
                    </Content>
                  </Card.Content>
                </Card>
              </Columns.Column>
              <Columns.Column>
                <Card>
                  <Card.Content>
                    <Content>
                      <img src="/img/contribute_avatar.png" alt=""/>
                      <h3>Contribute</h3>
                      <p>An active community of contributors that are passionate about product development and want to create something big.</p>
                    </Content>
                  </Card.Content>
                </Card>
              </Columns.Column>
              <Columns.Column>
                <Card>
                  <Card.Content>
                    <Content>
                    <img src="/img/mentor_avatar.png" alt=""/>
                    <h3>Mentor</h3>
                    <p>IOSF loves mentoring sessions. It gives us an opportunity to share knowledge amongst fellow developers and encourage them into product development.</p>
                    </Content>
                  </Card.Content>
                </Card>
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
      </>
    )
  }
}

export default Header;