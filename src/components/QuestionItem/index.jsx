import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionItem.module.css';
function QuestionItem({ question }) {
	return <div>{JSON.stringify(question)};</div>;
}
QuestionItem.propTypes = {
	question: PropTypes.object,
};
export default QuestionItem;
