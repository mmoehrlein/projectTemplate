#!/usr/bin/env node
if (process.env.pwd.split('/').pop() === 'projectTemplate') {
	throw new Error('Do not run this in the original repo');
}

