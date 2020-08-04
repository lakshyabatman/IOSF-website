import React from "react";
import { Modal, Section } from "react-bulma-components"

class NavModal extends React.Component {

  render() { 
    return ( 
      <Modal show={this.props.showNavModal} onClose={this.props.closeNavModal}> 
        <Modal.Content>
          <Section style={{ backgroundColor: 'white' }}>
            This is small screen navbar
          </Section>
        </Modal.Content>
      </Modal>
     );
  }
}
 
export default NavModal;