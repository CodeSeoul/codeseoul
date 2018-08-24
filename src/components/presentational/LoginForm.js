import React from 'react';
import { LoginFormContainer, Form, FormInput, Button, Error } from '../../styles/LoginFormStyle';

const LoginForm = (props) => {
    const { isAuthenticated, user, formInput, error } = props.states;
    const { handleInputChange, register, login, logout, checkAuth } = props.functions;
    return(
        <LoginFormContainer>
            <Error hidden={error==''?true:false}>{error}</Error>
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