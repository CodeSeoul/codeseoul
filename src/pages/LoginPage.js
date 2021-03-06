import React from 'react';
import { AuthStatus } from '../styles/pages/LoginPage/LoginPageStyle';
import LoginForm from '../components/containers/LoginForm/LoginForm'
import { postJSON, getJSON } from '../lib/util';

class LoginPage extends React.Component {
	state = {
		formInput:{
			id: '',
			pw: ''
		},
		isAuthenticated: false,
		user: 'null',
		error: ''
	}

	functions = {
		register: (cb) => {
			const { id, pw } = this.state.formInput;
			postJSON(`/user/register/local`
				, {username:id,password:pw})
			.then(res=>{
				return res.json();
			})
			.then(data=>{
				if(data.err){
					throw data.err;
				}
				this.setState({isAuthenticated:true});
				this.setState({error:''});
				this.functions.login();
				if(typeof cb === 'function')
					cb(data.user);
			})
			.catch((err) => {
				console.log(err);
				this.setState({error:'Error registering user:' + err.name});
			});
		},
	
		login: (cb) => {
			const { id, pw } = this.state.formInput;
			postJSON(
				`/user/login`,
				{ username: id, password: pw },
				{ credentials: 'include' }
			)
				.then(res => {
					if (res.status >= 200 && res.status < 300) {
						this.setState({ isAuthenticated: true });
						this.setState({error:''});
						this.functions.checkAuth();
						if (typeof cb === 'function') cb(res);
					} else this.setState({error:'Login failed'});
				})
				.catch(err => {
					console.log('Error while login:' + err);
					this.setState({error:'Error while login'});
				});
		},
	
		logout: (cb) => {
			getJSON(`/user/logout`, { credentials: 'include' })
				.then(res => {
					this.setState({ isAuthenticated: false });
					this.setState({error:''});
					if (typeof cb === 'function') cb(true);
				})
				.catch(err => {
					console.log('Error logging out user.');
					if (typeof cb === 'function') {
						// user was not logged out
						cb(true);
					}
				});
		},
		
		checkAuth: (cb) => {
			getJSON(`/user/me/info`, { credentials: 'include' })
				.then(res => {
					if (res.status >= 200 && res.status < 300) {
						res.json().then(e => {
							this.setState({ user: e.user });
						});
						this.setState({ isAuthenticated: true });
						this.setState({error:''});
						this.props.history.push("/");
						console.log('Successfully Login');
					} else {
						if(!this.state.isAuthenticated)
							this.setState({error:'You are not logged in'});
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
					this.setState({error:'Error fetching authorized user:' + err});
				});
		},
	
		handleInputChange: (e, type) => {
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
	}
	
	render = () => {
		return (
			<section>
				<AuthStatus>Username : 
					{this.state.isAuthenticated
					? this.state.user.username
					: 'not logged in'}
				</AuthStatus>
				<LoginForm 
					states={this.state}
					functions={this.functions}
					/>
			</section>
		)
	}
}

export default LoginPage;
