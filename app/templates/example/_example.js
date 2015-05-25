var React = require('react');
var <%= componentName %> = require('<%= packageName %>');

var App = React.createClass({
	render () {
		return (
			<div>
				<<%= componentName %> />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
