import React from 'react';
import useUsersStatistics from '../../hooks/useUsersStatistics';
import LeaderboardItem from '../LeaderboardItem';

const LeaderboardList = () => {
	const data = useUsersStatistics();
	return (
		<div>
			{data.map((d) => (
				<LeaderboardItem {...d} />
			))}
		</div>
	);
};
export default LeaderboardList;
