import React from "react";
import {
  LoginFormContainer,
  Form,
  FormInput,
  Button,
  Error
} from "../../../styles/pages/LoginPage/LoginFormStyle";
import PropTypes from "prop-types";

const LoginForm = props => {
  const { isAuthenticated, user, formInput, error } = props.states;
  const {
    handleInputChange,
    register,
    login,
    logout,
    checkAuth
  } = props.functions;
  return (
    <LoginFormContainer>
      <Error hidden={error == "" ? true : false}>{error}</Error>
      <Form>
        <FormInput
          type="text"
          onChange={e => handleInputChange(e, "id")}
          placeholder="username"
        />
        <FormInput
          type="password"
          onChange={e => handleInputChange(e, "pw")}
          placeholder="password"
        />
      </Form>
      <div style={{ display: "flex" }}>
        <Button hidden={isAuthenticated} onClick={e => register()}>
          Register
        </Button>
        <Button
          onClick={e => {
            isAuthenticated ? logout() : login();
          }}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </div>
    </LoginFormContainer>
  );
};

LoginForm.propTypes = {
  states: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.string,
    formInput: PropTypes.object.isRequired,
    error: PropTypes.string
  }),

  functions: PropTypes.shape({
    handleInputChange: PropTypes.function,
    register: PropTypes.function,
    login: PropTypes.function,
    logout: PropTypes.function,
    checkAuth: PropTypes.function
  })
};

export default LoginForm;
