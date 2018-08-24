import styled from "styled-components";
import * as style from "./variable";

const LoginFormContainer = styled.div`
    position: fixed;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormInput = styled.input`
    display: flex;

`;

const Button = styled.button`
    display: flex;
    width: 250px;

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