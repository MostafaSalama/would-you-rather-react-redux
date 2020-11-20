import { useSelector } from 'react-redux';

const useAuth = () => {
	const users = useSelector((state) => state.users);
	const authUser = useSelector((state) => state.authUser);
	return { authUser: users[authUser] };
};
export default useAuth;
