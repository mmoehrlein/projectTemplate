#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');

console.log('removing pre-, post- and initial script from package.json');
pkg.scripts.initial = undefined;
pkg.scripts.preinitial = undefined;
pkg.scripts.postinitial = undefined;

fs.writeFile(path.join(process.env.pwd, 'package.json'), JSON.stringify(pkg, null, 2), error => {
	if (error) {
		console.error(error);
	}
});

