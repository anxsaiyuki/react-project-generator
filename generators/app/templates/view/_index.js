import React from 'react';
<% if (!reactRouter) { %>import ReactDOM from 'react-dom';<% } %>

class Index extends React.Component {
	render() {
		return (
			<div>Index</div>
		)
	}
}

<% if (!reactRouter) { %>ReactDOM.render(<Index />, document.getElementById('App'));<% } else { %>module.exports = Index<% } %>
