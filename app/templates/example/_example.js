var React = require('react'),
	<%= componentName %> = require('<%= packageName %>');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<<%= componentName %> />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
