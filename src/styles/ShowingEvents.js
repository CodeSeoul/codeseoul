import styled from 'styled-components'

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

`

const LoadMoreEvents = styled.button`
    margin : 1rem auto;
    display : block;
    height : 2rem;
    color : grey;
    width : 50%;

`
export { ShowingEventsContainer, Events, LoadMoreEvents }