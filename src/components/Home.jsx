import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Store from './Store';
import About from './About';
import Login from './Login';
import Bag from './Bag';

export default function Home() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Store} />
				<Route exact path="/sobre" component={About} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/sacola" component={Bag} />
			</Switch>
		</main>
	);
}
