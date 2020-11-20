import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import useAuth from '../../hooks/useAuth';
import UserInfoMenu from '../UserInfoMenu';
const Nav = () => {
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
			<UserInfoMenu />
		</nav>
	);
};
export default Nav;
