import React from 'react';
<% if (!reactRouter) { %>import ReactDOM from 'react-dom';<% } %>

//css
require('./css/index.css');

class Index extends React.Component {
	render() {
		return (
			<div className="main">Index</div>
		)
	}
}

<% if (!reactRouter) { %>ReactDOM.render(<Index />, document.getElementById('App'));<% } else { %>module.exports = Index<% } %>
