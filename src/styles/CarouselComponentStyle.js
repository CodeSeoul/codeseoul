import styled from 'styled-components';

const CarouselItem = styled.div`
    width: auto;
    height:auto;
    padding: 50px 0px;
    background: ${props => props.background};
`
const ItemUl = styled.ul`
    width:auto;
    height:auto;
    float: right;
    padding-right:5vw;
`

const ItemLi = styled.li`
    padding: 5px;
`

export {CarouselItem, ItemUl, ItemLi};