import styled from 'styled-components';

const CarouselItem = styled.div`
    flex: 1 0 100%;
    flex-basis: 100%;
    padding: 50px 0px;
    background: ${props => props.background};
    order: ${(props) => props.order};
`

const CarouselContainer = styled.div`
    display: flex;
    /* margin: 0 0 20px 20px; */
    transition: ${props => props.isSliding? 'none': 'transform 1s ease'};

    transform: ${props => {
        if(!props.isSliding)
            return 'translateX(-100%)'
        else if (props.direction === 'prev') 
            return 'translateX(calc(2 * -100%))'
        return 'translateX(0%)'
    }};
`

const ContentClipper = styled.div`
    width: 80%;
    overflow: hidden;
    margin: auto;
    position: relative;
`

const ItemUl = styled.ul`
    width:auto;
    height:auto;
    float: right;
    padding-right:100px;
`

const ItemLi = styled.li`
    padding: 5px;
`

const SlideButton = styled.button`
    background: transparent;
    border: none;
    transform: scale(3);
    margin: 20px;
    z-index: 10;
    position: absolute;
    top: 60px;
    left: ${props=>props.left?'15px':''};
    right: ${props=>props.left?'':'15px'};
`

export {
    CarouselItem,
    CarouselContainer,
    ContentClipper,
    ItemUl,
    ItemLi,
    SlideButton
};