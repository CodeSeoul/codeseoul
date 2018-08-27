import styled from 'styled-components';

const CarouselItem = styled.div`
    width: auto;
    height:auto;
    padding: 50px 0px;
    background: ${props => props.background};
`

const CarouselContainer = styled.div`
    display: flex;
    margin: 0 0 20px 20px;
`

const ContentClipper = styled.div`
    width: 100%;
    overflow: hidden;
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

export {
    CarouselItem,
    CarouselContainer,
    ItemUl,
    ItemLi
};