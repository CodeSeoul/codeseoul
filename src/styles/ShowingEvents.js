import styled, { keyframes } from "styled-components";
import * as style from "./variable";

const fadeIn = keyframes`
  from{
    opacity : 0;
  }
  to{
    opacity : 1;
  }
`;

const CurrentEventsSection = styled.section`
  padding: 3rem;

  .title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.1rem;
  }
`;

const ShowingEventsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  grid-auto-rows: minmax(5rem, auto);

  .visible {
    animation: ${fadeIn} 0.5s linear;
  }
  .invisible {
    display: none;
  }

  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const Events = styled.div`
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
    cursor : pointer;
  }

  .groupName {
    background-color: ${style.PrimaryColor};
    color: white;
    text-align: center;
    font-size: 1.4rem;
    padding: 1rem 0.2rem;
  }

  .eventInfo {
    padding: 1rem;
    line-height: 1.5;
    font-size: 1.2rem;
  }
`;

const LoadMoreEvents = styled.button`
  margin: 1rem auto;
  display: block;
  height: 2rem;
  background-color: ${style.FourthColor};
  text-decoration: none;
  border: none;
  font-size: 1.1rem;
  width: 20%;
  min-width : 15rem;
  :hover {
    cursor : pointer;
    background-color: ${style.ThirdColor};
  }
`;

const DetailedEventInfoStyle = styled.div`
  line-height: 2.5rem;

  p{
    line-height: 2;
    word-break : break-word;
    word-wrap : break-word;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height : 1.3;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .image-container {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    text-align: center;
    margin: 1rem 0;
  }

  img {
    height: 5rem;
    width: 5rem;
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }
`;

export {
  CurrentEventsSection,
  ShowingEventsContainer,
  Events,
  LoadMoreEvents,
  DetailedEventInfoStyle
};
