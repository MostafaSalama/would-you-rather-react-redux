import React, { useState } from 'react';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../store/actions/action-creators';
import { useHistory } from 'react-router-dom';
const Login = () => {
	const [username, setUser] = useState('sarahedo');
	const history = useHistory();
	const dispatch = useDispatch();
	function changeUser(e) {
		setUser(e.target.value);
	}
	function logUser() {
		dispatch(setAuthUser(username));
		history.push('/');
	}
	return (
		<div>
			<div className={styles.loginContainer}>
				<h1>Sign In</h1>
				<div className={styles.form} onChange={changeUser}>
					<select>
						<option value="sarahedo">Sarah Edo</option>
						<option value="tylermcginnis">Tyler Mcginnis</option>
						<option value="johndoe">John Doe</option>
					</select>
					<button className="btn" onClick={logUser}>
						LogIn
					</button>
				</div>
			</div>
		</div>
	);
};
export default Login;
