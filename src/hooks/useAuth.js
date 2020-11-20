import { useSelector } from 'react-redux';

const useAuth = () => {
	const authUser = useSelector((state) => state.authUser);
	return { authUser };
};
export default useAuth;
