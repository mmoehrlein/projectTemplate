#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');

console.log('removing pre-, post- and initial* scripts from package.json');
for (const script in pkg.scripts) {
	if (Object.prototype.hasOwnProperty.call(pkg.scripts, script)) {
		if (script.match(/^((?:pre)|(?:post))?initial(?::.*)?/)) {
			pkg.scripts[script] = undefined;
		}
	}
}

fs.writeFile(path.join(process.env.pwd, 'package.json'), JSON.stringify(pkg, null, 2), error => {
	if (error) {
		console.error(error);
	}
});

