import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 3rem;
  overflow: scroll;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 1%;
  max-width: 70%;
  min-height: 90%;
  margin: 0 auto;
  padding: 3rem;
  position: relative;
`;

const ModalCloseButton = styled.div`
margin : none;
border : none;
position : absolute;
top : 15px;
right : 15px;
:hover{
  cursor : pointer;
}

`

export { ModalBackdrop, ModalContent, ModalCloseButton };
