'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var ReactComponentGenerator = yeoman.generators.Base.extend({
	
	initializing: function() {
		this.pkg = require('../package.json');
	},
	
	prompting_init: function() {
		var done = this.async();
		
		this.log(
			'\n' + chalk.bold.underline('Welcome to the React Component generator') +
			'\n' +
			'\nWe\'re going to set up a new ' + chalk.bold('ReactJS') + ' Component, ready for development with' +
			'\n' + chalk.bold('gulp, browserify, live-reload') + ' and publishing to ' + chalk.bold('GitHub Pages') + '.' +
			'\n'
		);
		
		var prompts = [{
			type: 'input',
			name: 'projectName',
			message: 'First, what is the name of your component?',
			default: 'My Component'
		}];
		
		this.prompt(prompts, function (props) {
			_.extend(this, props);
			this.packageName = _.kebabCase(_.deburr(this.projectName));
			if (this.packageName.slice(0, 6) !== 'react-') {
				this.packageName = 'react-' + this.packageName;
			}
			this.componentName = _.capitalize(_.camelCase(this.projectName));
			this.currentYear = new Date().getFullYear();
			done();
		}.bind(this));
	},
	
	prompting_names: function() {
		var done = this.async();
		
		var prompts = [{
			type: 'input',
			name: 'packageName',
			message: 'What is the ClassName for your component?',
			default: this.componentName
		}, {
			type: 'input',
			name: 'packageName',
			message: 'What will the npm package name be?',
			default: this.packageName
		}, {
			type: 'input',
			name: 'developerName',
			message: 'What is your name? (for copyright notice, etc.)'
		}];
		
		this.prompt(prompts, function (props) {
			_.extend(this, props);
			done();
		}.bind(this));
	},
	
	prompting_project: function() {
		var done = this.async();
		
		var prompts = [{
			type: 'input',
			name: 'ghUser',
			message: 'What is your GitHub Username?',
			default: _.capitalize(_.camelCase(this.developerName))
		}, {
			type: 'input',
			name: 'ghRepo',
			message: 'What is the name of the GitHub repo this will be published at?',
			default: this.packageName
		}, {
			type: 'confirm',
			name: 'createDirectory',
			message: 'Would you like to create a new directory for your project?',
			default: true
		}];
		
		this.prompt(prompts, function (props) {
			_.extend(this, props);
			if (props.createDirectory) {
				this.destinationRoot(this.packageName);
			}
			this.log('\n');
			done();
		}.bind(this));
	},
	
	writing: {
		project: function() {
			this.copy('editorconfig', '.editorconfig');
			this.copy('eslintignore', '.eslintignore');
			this.copy('eslintrc', '.eslintrc');
			this.copy('gitignore', '.gitignore');
			this.template('_bower.json', 'bower.json');
			this.template('_gulpfile.js', 'gulpfile.js');
			this.template('_package.json', 'package.json');
			this.template('_readme.md', 'README.md');
		},
		component: function() {
			this.template('src/_Component.js', 'src/' + this.componentName + '.js');
		},
		examples: function() {
			this.copy('example/example.less', 'example/src/example.less');
			this.copy('example/gitignore', 'example/src/.gitignore');
			this.template('example/_example.js', 'example/src/example.js');
			this.template('example/_index.html', 'example/src/index.html');
		}
	},
	
	install: function() {
		this.npmInstall();
	},
	
	end: function() {
		var chdir = this.createDirectory ? '"cd ' + this.packageName + '" then ' : '';
		this.log(
			'\n' + chalk.green.underline('Your new React Component is ready!') +
			'\n' +
			'\nYour component is in /src and your examples are in /example/src.' +
			'\n' +
			'\nType ' + chdir + '"npm start" to run the development build and server tasks.' +
			'\n'
		);
	}
	
});

module.exports = ReactComponentGenerator;
