import React from 'react';
import { } from '../styles/LoginPageStyle';

const postJSON = (route, data, options = {}) => {
  return fetch(`http://localhost:4002/api/v1.0${route}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    ...options,
    body: JSON.stringify(data)
  });
};

const getJSON = (route, options = {}) => {
  return fetch(`http://localhost:4002/api/v1.0${route}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    ...options
  });
};

class LoginPage extends React.Component {
	state = {
		formInput:{
			id: '',
			pw: ''
		},
		isAuthenticated: false,
		user: 'null'
  }
  
  register(cb) {
    console.log('registering');
    const { id, pw } = this.state.formInput;
    postJSON(`/admin/register/local`, { username: id, password: pw })
      .then(res => {
        console.log('registered');
        this.setState({ isAuthenticated: true });
        if (typeof cb === 'function') cb(res.json().user);
      })
      .catch(err => {
        console.log('Error registering user:' + err);
      });
  }

  login(cb) {
    const { id, pw } = this.state.formInput;
    postJSON(
      `/admin/login`,
      { username: id, password: pw },
      { credentials: 'include' }
    )
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          this.setState({ isAuthenticated: true });
          if (typeof cb === 'function') cb(res);
        }
      })
      .catch(err => {
        console.log('Error fetching authorized user:' + err);
      });
  }

  logout(cb) {
    getJSON(`/admin/logout`, { credentials: 'include' })
      .then(res => {
        this.setState({ isAuthenticated: true });
        if (typeof cb === 'function') cb(true);
      })
      .catch(err => {
        console.log('Error logging out user.');
        if (typeof cb === 'function') {
          // user was not logged out
          cb(true);
        }
      });
  }

  checkAuth(cb) {
    getJSON(`/admin/me/info`, { credentials: 'include' })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          res.json().then(e => {
            this.setState({ user: e.user });
          });
          this.setState({ isAuthenticated: true });
        } else {
          this.setState({ isAuthenticated: false });
        }
        if (typeof cb === 'function') {
          cb(true);
        }
      })
      .catch(err => {
        console.log('Error fetching authorized user:' + err);
        this.setState({ isAuthenticated: false });
        if (typeof cb === 'function') {
          cb(false);
        }
      });
  }

  handleInputChange(e, type) {
    let nextInput = { ...this.state.formInput };
    switch (type) {
      case 'id':
        nextInput.id = e.target.value;
        break;
      case 'pw':
        nextInput.pw = e.target.value;
        break;
      default:
        throw Error('invalid input type');
    }
    this.setState({ formInput: nextInput });
  }

  render = () => {
    return (
      <div>
        <div>
          Authenticated User :{' '}
          {this.state.isAuthenticated
            ? this.state.user.username
            : 'not authenticated'}
        </div>
        <form>
          <input
            type="text"
            onChange={e => this.handleInputChange(e, 'id')}
            placeholder="username"
          />
          <input
            type="password"
            onChange={e => this.handleInputChange(e, 'pw')}
            placeholder="password"
          />
        </form>
        <div>{this.state.formInput.id}</div>
        <div>{this.state.formInput.pw}</div>
        <button onClick={e => this.register()}>Register</button>
        <button onClick={e => this.login()}>Login</button>
        <button onClick={e => this.logout()}>Logout</button>
        <button onClick={e => this.checkAuth()}>CheckAuth</button>
      </div>
    );
  };
}

export default LoginPage;
