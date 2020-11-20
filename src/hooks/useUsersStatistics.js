import { useSelector } from 'react-redux';

export default function useUsersStatistics() {
	const users = useSelector((state) => state.users);
	const data = [];
	Object.values(users).forEach((user) => {
		const nOfQuestions = user.questions.length;
		const nOfAnswers = Object.keys(user.answers).length;
		const total = nOfQuestions + nOfAnswers;
		data.push({
			nOfQuestions,
			nOfAnswers,
			total,
		});
	});

	return data.sort((a, b) => b.total - a.total);
}
