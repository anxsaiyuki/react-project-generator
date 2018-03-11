import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import Index from './index';

class App extends React.Component {
	render() {
    <Router>
        <Route path="/" component={Index}/>
    </Router>
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
