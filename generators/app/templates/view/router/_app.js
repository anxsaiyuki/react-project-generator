/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from './index';

type Props = {||};

class App extends React.Component<Props> {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Index}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<App />, dom);
}
