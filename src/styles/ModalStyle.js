import styled from 'styled-components';

const ModalBackdrop = styled.div`

  position : fixed;
  top : 0;
  bottom :0;
  left : 0;
  right : 0;
  background-color : rgba(0,0,0,0.3);
  padding : 3rem;
  overflow : scroll;

`

const ModalContent = styled.div`
  overflow : scroll;
  background-color : #fff;
  border-radius : 0.5;
  max-width : 70%;
  min-height : 90%;
  margin : 0 auto;
  padding : 1rem;
  position : relative;
`

export { ModalBackdrop, ModalContent } 