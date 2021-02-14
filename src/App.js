import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Leaderboard from './pages/Leaderboard';
import AddQuestion from './pages/AddQuestion';
import QuestionView from "./pages/QuestionView";
import NotFound from "./pages/NotFound";
function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<PrivateRoute exact path="/">
					<Home />
				</PrivateRoute>
				<PrivateRoute exact path="/leaderboard">
					<Leaderboard />
				</PrivateRoute>
				<PrivateRoute exact path="/add">
					<AddQuestion />
				</PrivateRoute>
				<PrivateRoute exct path='/questions/:id'>
						<QuestionView/>
				</PrivateRoute>
				<Route exact path="/login">
					<Login />
				</Route>
				<PrivateRoute path='/404'>
					<NotFound />
				</PrivateRoute>
				<PrivateRoute path='/*'>
					<NotFound/>
				</PrivateRoute>
			</Switch>
		</div>
	);
}

export default App;
