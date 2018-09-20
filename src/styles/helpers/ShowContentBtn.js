import styled from 'styled-components';

const ShowContentBtn = styled.button`
  width: ${props => (props.isDisabled ? '10%' : '30%')};
  height: ${props => (props.isDisabled ? '3rem' : '5rem')};
  font-size: ${props => (props.isDisabled ? '0.8rem' : '2rem')};
  background-color: ${props => (props.isDisabled ? 'gray' : '#f77f00')};
  color: white;
  border-radius: 3px;
  :hover{
    cursor : pointer;
  }
`;

export default ShowContentBtn;
