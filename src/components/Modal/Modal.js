import React from "react";
import {
  ModalBackdrop,
  ModalContent,
  ModalCloseButton
} from "../../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <ModalBackdrop onClick={()=>this.props.onClose()}>
          <ModalContent onClick={(e)=>e.stopPropagation()}>
          <ModalCloseButton>
              <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={() => this.props.onClose()}
              />
            </ModalCloseButton>
            {this.props.children}
          </ModalContent>
        </ModalBackdrop>
      );
    }
  }
}

export default Modal;
