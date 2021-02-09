import React, { useState } from 'react';
import QuestionItem from '../QuestionItem';
import useAnswerAndUnansweredQuestions from '../../hooks/useAnswerAndUnansweredQuestions';
import styles from './QuestionList.module.css';
import {sortByTimeStamp} from '../../utils'
function QuestionsList() {
	const [
		answeredQuestions,
		unAnsweredQuestions,
	] = useAnswerAndUnansweredQuestions();
	const [currentQuestions, setCurrentQuestions] = useState(
		unAnsweredQuestions,
	);
	const [isAnsweredSelected, setAnsweredSelected] = useState(false);

	/**
	 * Run when the user toggle between
	 * Answered and unAnswered questions
	 */
	function setQuestions() {
		if (isAnsweredSelected) {
			setCurrentQuestions(unAnsweredQuestions);
			setAnsweredSelected(false);
			return;
		}
		setCurrentQuestions(answeredQuestions);
		setAnsweredSelected(true);
	}
	return (
		<div>
			<div className={styles.btnGroup}>
				<button
					className={`btn ${styles.btnPrimary} ${
						isAnsweredSelected ? styles.btnActive : ''
					}`}
					onClick={setQuestions}
				>
					Answered
				</button>
				<button
					className={`btn ${styles.btnPrimary} ${
						!isAnsweredSelected ? styles.btnActive : ''
					}`}
					onClick={setQuestions}
				>
					UnAnswered
				</button>
			</div>
			{currentQuestions.map((q) => (
				<QuestionItem key={q.id} question={q} />
			))}
		</div>
	);
}

export default QuestionsList;
