#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const pkg = require('../package.json');

console.log('Set package name, placeholder description and repository according to directory name');
pkg.name = process.env.pwd.split('/').pop().trim().replace(' ', '');
pkg.description = pkg.name + ' description';
pkg.repository = 'github:mmoehrlein/' + pkg.name;
fs.writeFile(path.join(process.env.pwd, 'package.json'), JSON.stringify(pkg, null, 2), error => {
	if (error) {
		throw error;
	}
});
