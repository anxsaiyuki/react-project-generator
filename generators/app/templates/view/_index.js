/* @flow */

import React from 'react';
<% if (!reactRouter) { %>import ReactDOM from 'react-dom';<% } %>
//css
require('./css/index.css');

type Props = {||};

class Index extends React.Component<Props> {
	render() {
		return (
			<div className="main">Index</div>
		)
	}
}

<% if (!reactRouter) { %>ReactDOM.render(<Index />, document.getElementById('App'));<% } else { %>module.exports = Index<% } %>
