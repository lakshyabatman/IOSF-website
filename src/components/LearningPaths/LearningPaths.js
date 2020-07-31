import React from "react";
import "./learningPath.css";

import { Section, Content, Container, Box, Columns, Button } from 'react-bulma-components'

class LearningPaths extends React.Component{
  render() {
    return(
      <Section className="learningpath__section">
        <Container>
          <Content>
            <h2 className="section__title">Personalised Learning Paths for Devs</h2>
            <div className="learningpath__boxContainer">
              <Box>
                <Columns>
                  <Columns.Column size={5}>
                    <img src="/img/beginner-fiendly.svg" />
                  </Columns.Column>
                  <Columns.Column size={7}>
                    <h3>Beginner Friendly Path</h3>
                      <p>This path is specially designed for those who have little or zero experience in computer programming and open source.</p>
                      <p>We will cover JavaScript, Python and Version Control (Git) form scratch and kick off by contributing to small yet interesting projects.</p>
                    <Button className="learningpath__getStartedBtn">GET STARTED</Button>
                  </Columns.Column>
                </Columns>
              </Box>
              <Box>
                <Columns>
                <Columns.Column size={7}>
                  <h3>Hands-on Code Path</h3>
                     <p>This path is a step further, we will use our programming skills and logic to contribute and build products that will solve a real-life problem.</p>
                     <p>Contribute to our source code and help us build better products</p>
                   <Button className="learningpath__getStartedBtn">GET STARTED</Button>
                  </Columns.Column>
                  <Columns.Column size={5}>
                    <img src="/img/advanced-path.svg" />
                  </Columns.Column>
                </Columns>
              </Box>
            </div>
          </Content>
        </Container>
      </Section>

    )
  }
}

export default LearningPaths