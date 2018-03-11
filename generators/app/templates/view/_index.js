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
<% if (!reactRouter) { %>
const dom = document.getElementById('App')
if (dom === null) {
	//Error
	console.error("dom does not exist")
} else {
	ReactDOM.render(<Index />, dom);
}<% } else { %>
module.exports = Index<% } %>
