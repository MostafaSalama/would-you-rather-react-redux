import useQuestionsWithAvatars from './useQuestionsWithAvatars';
import useAuth from './useAuth';
import { useSelector } from 'react-redux';
import {sortByTimeStamp} from "../utils";

export default function useAnsweredAndUnAnsweredQuestions() {
	const users = useSelector((state) => state.users);
	const auth = useAuth();
	let allQuestions = useQuestionsWithAvatars();
	allQuestions = sortByTimeStamp(allQuestions);
	const answeredQuestions = allQuestions.filter(
		(q) => !!auth.authUser.answers[q.id],
	);
	const unansweredQuestions = allQuestions.filter(
		(q) => !auth.authUser.answers[q.id],
	);
	return [answeredQuestions, unansweredQuestions];
}
