# <%= projectName %>

__COMPONENT DESCRIPTION GOES HERE__


## Demo & Examples

Live demo: [<%= ghUser %>.github.io/<%= ghRepo %>](http://<%= ghUser %>.github.io/<%= ghRepo %>/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use <%= packageName %> is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/<%= packageName %>.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install <%= packageName %> --save
```


## Usage

__EXPLAIN USAGE HERE__

```
var <%= componentName %> = require('<%= packageName %>');

<<%= componentName %>>Example</<%= componentName %>>
```

### Properties

* __DOCUMENT PROPERTIES HERE__

### Notes

__ADDITIONAL USAGE NOTES__

### License

__PUT LICENSE HERE__

Copyright (c) <%= currentYear %> <%= developerName %>.

