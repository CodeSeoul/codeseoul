import styled from 'styled-components'
import * as style from './variable'

const CurrentEventsSection = styled.section`

padding : 3rem;

.title{
    font-size : 2rem;
    font-weight : 600;
    margin-bottom : 1.1rem;
}
` 

const ShowingEventsContainer = styled.div`

 display : grid;
 grid-template-columns : repeat(3, 1fr);
 grid-auto-rows : minmax(5rem, auto);
 grid-column-gap : 1rem;
 grid-row-gap : 1rem;

`

const Events = styled.div`

    background-color : ${style.MiddleColor};
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
export { CurrentEventsSection, ShowingEventsContainer, Events, LoadMoreEvents }