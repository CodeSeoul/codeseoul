import React from "react";
import {
  ModalBackdrop,
  ModalContent,
  ModalCloseButton
} from "../../../styles/helpers/ModalStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  show : PropTypes.bool.isRequired
}

export default Modal;
