import React from "react";
import "./bootcamps.css"
import { Section, Button, Content, Container } from "react-bulma-components";

class Bootcamps extends React.Component{
  render() {
    return(
      <Section className="bootcamp__notificationContainer">
        <Container>
          <Content>
            <h2 className="bootcamp__title">#WeekendBootcamps</h2>
            <div className="bootcamp__content">
              <p>Participate into our coding bootcamps and let's build some mini projects, brush-up concepts on computer programming, logic and problem solving.</p>
              <p>Get <strong>IOSF Certified</strong> and showcase your skills.</p>
            </div>
            <Button className="bootcamp__enrollBtn" size="medium">ENROLL NOW <i className="fas fa-arrow-right"></i></Button>
          </Content>
        </Container>
      </Section>
    )
  }
}

export default Bootcamps;