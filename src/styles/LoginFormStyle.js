import styled from "styled-components";
import * as style from "./variable";

const LoginFormContainer = styled.div`
    width: 60%;
    background: ${style.FifthColor};
`;

const AuthStatus = styled.div`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormInput = styled.input`
    display: flex;

`;

const Button = styled.button`
    display: flex;
    width: 250px;

`;

export { LoginFormContainer, AuthStatus, Form, FormInput, Button };