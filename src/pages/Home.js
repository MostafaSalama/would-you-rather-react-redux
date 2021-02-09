import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from '../store/reducers';
import QuestionsList from '../components/QuestionsList';
import LoadingSpinner from '../components/LoadingSpinner';

function Home() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	useEffect(() => {
		dispatch(getInitialData());
	}, [dispatch]);
	return (
		<section>{isLoading ? <LoadingSpinner /> : <QuestionsList />}</section>
	);
}
export default Home;
