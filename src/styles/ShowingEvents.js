import styled from 'styled-components'
import * as style from './variable'

const ShowingEventsContainer = styled.div`

 display : grid;
 margin : 2rem 3rem 0.5rem 3rem;
 grid-template-columns : repeat(3, 1fr);
 grid-auto-rows : minmax(5rem, auto);
 
 >*{
     border : 1px solid black;
 }

`

const Events = styled.div`

    background-color : ${style.MiddleColor};
    margin : 0.8rem;
    border : none;    

    .groupName{
        background-color : ${style.DarkPrimaryColor};
        color : white;
        text-align :center;
        font-size : 1.8rem;
        padding : 1rem 0.2rem;
        }

    .eventInfo{
        padding : 1rem;
        line-height : 1.5;
        font-size : 1.2rem;    
    }

`

const LoadMoreEvents = styled.button`
    margin : 1rem auto;
    display : block;
    height : 2rem;
    background-color : ${style.LightSecondaryColor};
    text-decoration : none;
    border : none;
    font-size : 1.1rem;
    width : 20%;
    :hover{
        background-color : ${style.LightPrimaryColor};
    }

`
export { ShowingEventsContainer, Events, LoadMoreEvents }