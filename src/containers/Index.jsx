import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import '../scss/globals.scss';

const App = () => (
	<BrowserRouter>
		<Layout />
	</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
