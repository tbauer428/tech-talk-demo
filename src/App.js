import React from 'react';
import Login from './components/Login';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Login />
			</div>
		);
	}
}

export default App;
