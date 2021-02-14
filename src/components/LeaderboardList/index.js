import React from 'react';
import useUsersStatistics from '../../hooks/useUsersStatistics';
import LeaderboardItem from '../LeaderboardItem';
import styles from './LeaderboardList.module.css';
const LeaderboardList = () => {
	const data = useUsersStatistics();
	return (
		<div className={styles.listContainer}>
			{data.map((d) => (
				<LeaderboardItem key={d.name} {...d} />
			))}
		</div>
	);
};
export default LeaderboardList;
