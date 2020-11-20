import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { useSelector } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<PrivateRoute exact path="/">
					<Home />
				</PrivateRoute>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
