import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

import ReactDOM from 'react-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
