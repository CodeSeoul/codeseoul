import styled from 'styled-components';
import * as style from './variable';

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
    overflow: hidden;
    margin: 10px;
    position: relative;
    border: 5px solid ${style.ThirdColor};
`

const ItemUl = styled.ul`
    width:auto;
    height:auto;
    padding-left: 100px;
    padding-right: 100px;
`

const ItemLi = styled.li`
    padding: 5px;
`

const SlideButton = styled.button`
    background: transparent;
    border: none;
    transform: scale(3);
    z-index: 10;
    position: absolute;
    top: 50%;
    margin-left: 20px;
    margin-right: 20px;
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