/**
 * Initialize logger and config
 */
require('./lib').initAll();

/**
 * Get configured logger and config
 *
 * @type {winston.Logger} logger
 * @type {Object} conf
 */
const logger = require('winston').loggers.get('standard');
const conf = require('nconf');

/**
 * Default config can be added
 */
conf.defaults({
	foo: 'bar'
});

/**
 * Main code starts here
 */
logger.debug(conf.get('foo'));

