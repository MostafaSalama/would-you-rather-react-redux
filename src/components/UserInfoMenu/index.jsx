import React from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './UserInfoMenu.module.css';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../../store/actions/action-creators';
const UserInfoMenu = () => {
	const { authUser } = useAuth();
	const dispatch = useDispatch();
	function logOut() {
		dispatch(setAuthUser(''));
	}
	return (
		<>
			{authUser && (
				<ul className={styles.userInfo}>
					<li className={styles.item}>
						<img
							alt={`${authUser.name} Avatar`}
							src={authUser.avatarURL}
						/>
					</li>
					<li className={styles.item}>
						<p>{`Welcome ${authUser.name}`}</p>
					</li>
					<li className={styles.item}>
						<button onClick={logOut}>Log Out</button>
					</li>
				</ul>
			)}
		</>
	);
};
export default UserInfoMenu;
