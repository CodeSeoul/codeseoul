import React from 'react';

const postJSON = (route, data, options={}) => {
	return fetch(`http://localhost:4002/api/v1.0${route}`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'
		},
		...options,
		body: JSON.stringify(data)
	});
}

const getJSON = (route, options={}) => {
	return fetch(`http://localhost:4002/api/v1.0${route}`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json'
		},
		...options
	});
}

class AdminLoginPage extends React.Component {
	state = {
		isAuthenticated: false
	}

	register(cb) {
		postJSON(`/admin/register/local`
			, {username:'helow1',password:'asd'})
		.then(res=>{
			this.setState({isAuthenticated:true});
			if(typeof cb === 'function')
				cb(res.json().user);
		})
		.catch((err) => {
			console.log('Error registering user:' + err);
		});
	}

	login(cb) {
		postJSON(`/admin/login`
			, {username:'helow1',password:'asd'}
			, {credentials:'include'})
		.then(res=>{
			this.setState({isAuthenticated:true});
			if(typeof cb === 'function')
				cb(res);
		})
		.catch((err) => {
			console.log('Error fetching authorized user:' + err);
		});
	}

	logout(cb) {
		getJSON(`/admin/logout`, {credentials:'include'})
		.then(res=>{
			this.setState({isAuthenticated:false});
			if(typeof cb === 'function')
				cb(true);
		})
		.catch((err) => {
			console.log('Error logging out user.');
			if (typeof cb === 'function') {
				// user was not logged out
				cb(true);
			}
		});
	}
	
	checkAuth(cb) {
		getJSON(`/admin/me/info`
		, {credentials:'include'})
		.then(res=>{
			if(res.status >= 200 && res.status < 300){
				this.setState({isAuthenticated:true});
			} else {
				this.setState({isAuthenticated:false});
			}
			if (typeof cb === 'function') {
				cb(true);
			}
		})
		.catch((err) => {
			console.log('Error fetching authorized user:' + err);
			this.setState({isAuthenticated:false});
			if (typeof cb === 'function') {
				cb(false);
			}
		});
	}

	render = () => {
		return (
			<div>
				<div>Authenticated? : </div><p>{this.state.isAuthenticated.toString()}</p>
				<button onClick={(e)=>this.register()}>Register</button>
				<button onClick={(e)=>this.login()}>Login</button>
				<button onClick={(e)=>this.logout()}>Logout</button>
				<button onClick={(e)=>this.checkAuth()}>CheckAuth</button>
		
			</div>
		)
	}
}

export default AdminLoginPage;