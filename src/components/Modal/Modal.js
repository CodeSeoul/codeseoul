import React from "react";
import { ModalBackdrop, ModalContent } from "../../styles/ModalStyle";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <ModalBackdrop>
          <ModalContent>
            {this.props.children}
            <button onClick={() => this.props.onClose()}>Close</button>
          </ModalContent>
        </ModalBackdrop>
      );
    }
  }
}

export default Modal;
