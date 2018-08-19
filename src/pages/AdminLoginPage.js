import React from 'react';

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