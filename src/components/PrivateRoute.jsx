import React from 'react';
import useAuth from '../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	const auth = useAuth();
	console.log(auth.authUser);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth.authUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};
export default PrivateRoute;
