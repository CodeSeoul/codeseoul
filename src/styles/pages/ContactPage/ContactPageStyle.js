import styled from "styled-components";
import * as style from "../../variable";

const ContactPageStyle = styled.div`
  text-align: center;

  .container {
    font-size: 1.4rem;
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
    height: 30vh;
    font-size: 3rem;
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
    min-width: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    input {
      height: 30px;
    }
  }
`;

export default ContactPageStyle;
