import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardItem = ({
	name,
	avatarURL,
	nOfQuestions,
	nOfAnswers,
	total,
}) => {
	return (
		<div>
			<div>
				<div>
					<img alt={`${name} Avatar`} src={avatarURL} />
				</div>
				<div>
					<p>{name}</p>
				</div>
			</div>
			<div>
				<p>
					<span>Questions</span> <span>{nOfQuestions}</span>
				</p>
				<p>
					<span>Answers</span> <span>{nOfAnswers}</span>
				</p>
				<p>
					<span>Total</span> <span>{total}</span>
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
