import React from 'react';
import { LoginFormContainer, AuthStatus, Form, FormInput, Button } from '../../styles/LoginFormStyle';

const LoginForm = (props) => {
    const { isAuthenticated, user, formInput, error } = props.states;
    const { handleInputChange, register, login, logout, checkAuth } = props.functions;
    return(
        <LoginFormContainer>
            <AuthStatus>Authenticated User :{' '}
                {isAuthenticated
                    ? user.username
                    : 'not authenticated'}
            </AuthStatus>
            <div>{error}</div>
            <Form>
                <FormInput 
                    type='text' 
                    onChange={e=>handleInputChange(e, 'id')} 
                    placeholder='username'/>
                <FormInput 
                    type='password' 
                    onChange={e=>handleInputChange(e, 'pw')} 
                    placeholder='password'/>
            </Form>
            <div>{formInput.id}</div>
            <div>{formInput.pw}</div>
            <Button onClick={(e)=>register()}>Register</Button>
            <Button onClick={(e)=>login()}>Login</Button>
            <Button onClick={(e)=>logout()}>Logout</Button>
            <Button onClick={(e)=>checkAuth()}>CheckAuth</Button>
        </LoginFormContainer>
    )
}

export default LoginForm;