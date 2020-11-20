import React from 'react';
import PropTypes from 'prop-types';
function QuestionItem({ question }) {
	return (
		<div className="flex">
			<div className="w-300 2-300  question-container">
				<div className="question-author-container">
					<div className="question-image">
						<img src={question.avatarURL} alt={question.author} />
					</div>
					<div className="question-author-title">
						<p>{question.author}</p>
					</div>
				</div>
				<div className="question">
					<p className="title">Would You Rather</p>
					<div>
						<p>{question.optionOne.text}...</p>
					</div>
				</div>
				<div className="btn-container">
					<button className="btn btn-outline">View Question</button>
				</div>
			</div>
		</div>
	);
}
QuestionItem.propTypes = {
	question: PropTypes.object,
};
export default QuestionItem;
