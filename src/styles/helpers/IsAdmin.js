//renders children if user is logged in

import React from 'react';

const getJSON = (route, options = {}) => {
  return fetch(`http://localhost:4002/api/v1.0${route}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    ...options
  });
};

class IsAdmin extends React.Component {
  state = {
    isAuthenticated: false,
    user: ''
  };
  checkAuth() {
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
      })
      .catch(err => {
        console.log('Error fetching authorized user:' + err);
        this.setState({ isAuthenticated: false });
        if (typeof cb === 'function') {
          cb(false);
        }
      });
  }
  componentDidMount() {
    this.checkAuth();
  }
  render() {
    const { children } = this.props;
    const { isAuthenticated, user } = this.state;
    let childrenWithProps = React.children.map(children, child => {
      React.cloneElement(child, { isAuthenticated, user });
    });
    let content = Roles.userIsInRole(Meteor.userId(), 'admin')
      ? childrenWithProps
      : this.this.props.notLoggedInComponent;
    return content;
  }
}

export default IsAdmin;
