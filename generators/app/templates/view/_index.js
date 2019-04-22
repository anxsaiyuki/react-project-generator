/* @flow */

import React, {Fragment} from 'react';
<% if (!reactRouter) { %>import ReactDOM from 'react-dom';<% } %>
//css
require('./css/index.css');

type Props = {||};

type State = {
	name: string,
}

class Index extends React.Component<Props, State> {
	state: State = {
		name: 'anxsaiyuki',
	}

	onButtonClick = () => {
		alert(this.state.name)
	}

	render() {
		return (
			<Fragment>
				<div className="main">Index</div>
				<button onClick={this.onButtonClick}>Click Me!</button>
			</Fragment>
		)
	}
}
<% if (!reactRouter) { %>
const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<Index />, dom);
}<% } else { %>
module.exports = Index<% } %>
