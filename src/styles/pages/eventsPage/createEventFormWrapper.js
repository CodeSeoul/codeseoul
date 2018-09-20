import styled from 'styled-components';
import { PrimaryColorLight, ThirdColor, PrimaryFont } from '../../variable';

let CreateEventFormWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0.5rem;
  text-align: left;
  background-color: ${PrimaryColorLight};
  * {
    font-family: ${PrimaryFont};
  }
  > button {
    margin: 0 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      font-size: 1.2rem;
      width: 80%;
      height: 2.8rem;
      margin: 1rem auto;
      border: 1px solid black;
      padding-left: 1rem;
      box-sizing: border-box;
    }
    div {
      border: 1px solid gray;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 80%;
      margin: 0 auto;
    }
    label {
      height: auto;
      margin: 2rem auto;
      padding: 0.4rem;
      box-sizing: border-box;
      font-size: 1.6rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      border-radius: 3px;
      background-color: white;
    }

    #form-event-venue {
      appearance: none;
      -webkit-appearance: none;
      width: 50%;
      font-size: 1.2rem;
      padding: 0 0.5rem 0;
    }
    #form-event-date {
      height: auto;
      width: 65%;
      appearance: none;
      -webkit-appearance: none;
      font-size: 1.2rem;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 0 0.5rem;
    }
    #form-event-start-time,
    #form-event-end-time {
      width: 55%;
      height: auto;
      border-radius: 5px;
    }
  }
`;

const EventDescription = styled.textarea`
  font-size: 1.2rem;
  height: 4rem;
  width: 80%;
  margin: 1rem auto;
  border: 1px solid black;
  padding-left: 1rem;
  box-sizing: border-box;
  resize: none;
`;

const CreateEventButton = styled.button`
  width: 50%;
  margin: 1rem auto;
  color: white;
  background-color: ${ThirdColor};
  font-size: 2.5rem;
`;
CreateEventFormWrapper.EventDescription = EventDescription;
CreateEventFormWrapper.CreateEventButton = CreateEventButton;
export default CreateEventFormWrapper;
