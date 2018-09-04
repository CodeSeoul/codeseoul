import styled from "styled-components";
import * as style from "../../variable";

const ContactPageStyle = styled.div`
  text-align: center;
  * {
    box-sizing: border-box;
  }

  .container {
    font-size: 1.2rem;
    max-width: 40%;
    min-width: 250px;
    margin: 0 auto;
    border: 1px solid ${style.PrimaryColorLight};
    border-radius: 2%;
    padding: 30px;
    margin-top: 30px;
  }

  header {
    background-color: ${style.PrimaryColor};
    height: 20vmin;
    font-size: 7.5vmin;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .primary-contact {
    div {
      margin: 20px auto;
    }
  }

  .social-media ul {
    display: flex;
    flex-wrap: wrap;
    min-height: 100px;

    li {
      min-width: 150px;
      margin: auto;
    }
  }

  form {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    input {
      width: 80%;
      min-width: inherit;
      height: 30px;
      margin: 10px auto;
    }
    button {
      width: 80%;
      min-width: inherit;
      background-color: white;
      font-size: inherit;
      margin: 10px auto 0 auto;
      padding: 0;
      height: 30px;
      border: ${style.SecondaryColor} 1px solid;
      &:hover {
        color: white;
        background-color: ${style.SecondaryColor};
      }
    }
  }
`;

export default ContactPageStyle;
