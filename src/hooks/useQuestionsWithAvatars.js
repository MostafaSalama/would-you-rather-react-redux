import { useSelector } from 'react-redux';

export default function useQuestionsWithAvatars() {
	const users = useSelector((state) => state.users);
	const questions = useSelector((state) => state.questions);
	return questions.map((q) => {
		const { author } = q;
		const { avatarURL } = users[author];
		return { ...q, avatarURL };
	});
}
