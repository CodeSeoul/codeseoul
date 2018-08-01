import styled from 'styled-components';

const CarouselItem = styled.div`
    width: auto;
    height:auto;
    padding: 50px 0px;
    text-align:center;
    background: ${props => props.background};
`


const CarouselContainer = styled.div`
    width:80%;
    height: auto;
    border: 1px solid black;
`

export {CarouselItem, CarouselContainer};