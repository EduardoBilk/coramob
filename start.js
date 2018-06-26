import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return <p>Yup, works! </p>;
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));
