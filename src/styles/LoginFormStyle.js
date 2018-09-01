import styled from "styled-components";
import * as style from "./variable";

const LoginFormContainer = styled.div`

    margin : 20px auto;
    width: 60%;

`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormInput = styled.input`
    display: flex;
    width: 100%;
    height: 60px;
    margin: 6px;
    padding: 1rem;
    font-size: 1.25rem;
    box-sizing: border-box;
    border: 2px solid gray;
    color: ${style.PrimaryColor};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: color box-shadow border-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
    }
    :focus{
        color:${style.PrimaryColorLight};
        border-color: ${style.PrimaryColorLight};
    }
`;

const Button = styled.button`
    width: 250px;
    box-sizing: border-box;
    background-color: #003049;
    border: 1px solid #eae2b7;
    margin-bottom: 6px;
    margin-top: 6px;
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem;
    color: white;
    justify-content: center;
    align-content: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
    }
    :active{
        transform: translate(0%,5%);
    }
`;

const Error = styled.div`
    display: flex;
    box-sizing: border-box;
    background-color: #f7d7d7;
    border: 1px solid #d62828;
    width: 100%;
    font-size: 1.2rem;
    margin-bottom: 10px;
    padding: 1rem;
    color: #d62828;
    justify-content: center;
    align-content: center;
`

export { LoginFormContainer, Form, FormInput, Button, Error };