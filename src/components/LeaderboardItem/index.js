import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeaderboardItem.module.css';
const LeaderboardItem = ({
	name,
	avatarURL,
	nOfQuestions,
	nOfAnswers,
	total,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.userInfo}>
				<div>
					<img alt={`${name} Avatar`} src={avatarURL} />
				</div>
				<div>
					<p>{name}</p>
				</div>
			</div>
			<div className={styles.userStatistics}>
				<p className={styles.infoText}>
					<span>Questions</span>{' '}
					<span className={styles.importantText}>{nOfQuestions}</span>
				</p>
				<p className={styles.infoText}>
					{' '}
					<span>Answers</span>{' '}
					<span className={styles.importantText}>{nOfAnswers}</span>
				</p>
				<p className={styles.infoText}>
					{' '}
					<span>Total</span>{' '}
					<span className={styles.importantText}>{total}</span>
				</p>
			</div>
		</div>
	);
};
LeaderboardItem.propTypes = {
	name: PropTypes.string,
	avatarURL: PropTypes.string,
	nOfQuestions: PropTypes.number,
	nOfAnswers: PropTypes.number,
	total: PropTypes.number,
};
export default LeaderboardItem;
