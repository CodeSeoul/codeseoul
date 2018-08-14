import styled from 'styled-components'

const ShowingEventsContainer = styled.div`

 display : grid;
 margin : 3rem;
 grid-template-columns : repeat(3, 1fr);
 grid-auto-rows : minmax(5rem, auto);
 
 >*{
     border : 1px solid black;
 }

`

const Events = styled.div`

`
export { ShowingEventsContainer, Events }