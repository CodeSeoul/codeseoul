import styled from 'styled-components';

const CarouselItem = styled.div`
    flex: 1 0 100%;
    flex-basis: 80%;
    margin-right: 20px;
    padding: 50px 0px;
    background: ${props => props.background};
    order: ${(props) => props.order};

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CarouselContainer = styled.div`
    display: flex;
    margin: 0 0 20px 20px;
    transition: ${props => props.isSliding? 'none': 'transform 1s ease'};

    transform: ${props => {
        if(!props.isSliding)
            return 'translateX(calc(-80% - 20px))'
        else if (props.direction === 'prev') 
            return 'translateX(calc(2 * (-80% - 20px)))'
        return 'translateX(0%)'
    }};
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

const SlideButton = styled.button`
    background: transparent;
    border: none;
    transform: scale(3);
    padding: 20px;
`

export {
    CarouselItem,
    CarouselContainer,
    ContentClipper,
    ItemUl,
    ItemLi,
    SlideButton
};