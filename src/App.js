import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { useSelector } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Leaderboard from './pages/Leaderboard';
import AddQuestion from './pages/AddQuestion';
import QuestionView from "./pages/QuestionView";
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
				<PrivateRoute path="/add">
					<AddQuestion />
				</PrivateRoute>
				<PrivateRoute path='/questions/:id'>
						<QuestionView/>
				</PrivateRoute>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
