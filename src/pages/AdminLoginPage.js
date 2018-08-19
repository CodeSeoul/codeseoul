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

	render = () => {
		return (
			<div>
				<div>Authenticated? : </div><p>{this.state.isAuthenticated.toString()}</p>
			</div>
		)
	}
}

export default AdminLoginPage;