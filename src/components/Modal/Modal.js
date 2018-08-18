import React from "react";
import { ModalBackdrop, ModalContent, ModalCloseButton } from "../../styles/ModalStyle";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <ModalBackdrop>
          <ModalContent>
          <ModalCloseButton onClick={() => this.props.onClose()}>Close</ModalCloseButton>
            {this.props.children}
          </ModalContent>
        </ModalBackdrop>
      );
    }
  }
}

export default Modal;
