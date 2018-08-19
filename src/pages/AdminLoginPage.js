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
				<button onClick={(e)=>this.checkAuth()}>CheckAuth</button>
		
			</div>
		)
	}
}

export default AdminLoginPage;