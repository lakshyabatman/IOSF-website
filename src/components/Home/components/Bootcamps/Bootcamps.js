import React from "react";
import "./bootcamps.css"
import { Section, Notification, Content } from "react-bulma-components";

class Bootcamps extends React.Component{
  render() {
    return(
      <Section>
        <Notification color="danger" className="bootcamp__notificationContainer">
          <Content>
            <h2 className="section__title bootcamp__title">#WeekendBootcamps</h2>
          </Content>
        </Notification>
      </Section>
    )
  }
}

export default Bootcamps;