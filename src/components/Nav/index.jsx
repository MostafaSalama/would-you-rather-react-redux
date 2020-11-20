import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import useAuth from '../../hooks/useAuth';
const Nav = () => {
	const { authUser } = useAuth();
	return (
		<nav className={styles.nav}>
			<ul className={styles.navbar}>
				<li className={styles.navItem}>
					<Link className={styles.navLink} to="/">
						Home
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link className={styles.navLink} to="/add">
						New Question
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link className={styles.navLink} to="/leaderboard">
						Leaderboard
					</Link>
				</li>
			</ul>
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
						<button>Log Out</button>
					</li>
				</ul>
			)}
		</nav>
	);
};
export default Nav;
