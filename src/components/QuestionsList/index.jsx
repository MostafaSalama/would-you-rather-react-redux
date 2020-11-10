import React from 'react';
import QuestionItem from '../QuestionItem';
import useQuestionsWithAvatars from '../../hooks/useQuestionsWithAvatars';

function QuestionsList() {
	const questions = useQuestionsWithAvatars();
	return (
		<div>
			{questions.map((q) => (
				<QuestionItem key={q.id} question={q} />
			))}
		</div>
	);
}
export default QuestionsList;
