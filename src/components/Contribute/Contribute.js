import React from "react";
import "./contribute.css"

import { Section, Container, Columns, Card, Button } from 'react-bulma-components';

class Contribute extends React.Component{
  render() {
    return(
      // <section className="contribute__section">
      //   <div className="contribute__section__container container">
      //     <h4 className="section__title center">Contribute to real-world projects</h4>
      //     <div className="contributeSectionBanner">

      //     </div>
      //     <p className="flow-text center-align">OUR PRODUCTS:</p>

      //     <div className="row">
      //       <div className="col l4 m12 s12">
      //         <div className="productCard card z-depth-0">
      //           <span className="productProgressTag">ON-GOING</span>
      //             <img className="productAvatar" src="/img/dynamic_cli_avatar.png" height={150} alt=""/>
      //           <div className="card-content">
      //             <h6 className="card-title">Dynamic CLI</h6>
      //            
      //           </div>
      //           <div className="card-action">
      //             <a href="" className="product__contribute__btn btn blue z-depth-0">CONTRIBUTE</a>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
      <Section className="products__section">
        <Container>
          <h2 className="section__title">Contribute to real-world projects</h2>
          <Columns>
            <Columns.Column size={4}>
              <div className="product__card">
              <Card>
                <Card.Content>
                  <img className="product__avatar" src="/img/dynamic_cli_avatar.png" alt=""/>
                  <span className="product__progressTag">ON-GOING</span>
                  <h6>Dynamic CLI</h6>
                  <span>A CLI utility that can connect to an external databases, also fetch suggestions from different dev communities like stackoverflow and reddit.</span>
                  <Button className="product__contributeBtn" size="small">CONTRIBUTE</Button>
                </Card.Content>
              </Card>
              </div>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    )
  }
}

export default Contribute;