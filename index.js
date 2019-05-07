const { getOptions } = require('loader-utils');
const optionsSchema = require('./options.json');
const phtml = require('phtml');
const validateOptions = require('schema-utils');

module.exports = async function phtmlLoader (sourceHTML, sourceMap, meta) {
	// configure the loader options
	const options = Object(getOptions(this));

	validateOptions(optionsSchema, options, 'pHTML Loader');

	// prepare asynchronous callback
	const cb = this.async();

	// process the source using phtml
	phtml.process(sourceHTML, {
		from: this.resourcePath
	}, options.plugins).then(
		result => {
			// configure meta
			meta = Object.assign(Object(meta), {
				ast: {
					type: 'phtml',
					root: result.root
				},
				messages: result.messages
			});

			// configure dependencies
			result.messages.forEach(message => {
				if (message.type === 'dependency') {
					this.addDependency(message.file);
				}
			});

			// configure response JavaScript
			const resultJS = `export default ${JSON.stringify(result.html)}`;

			// invoke the callback using the processed results
			return cb(null, resultJS, sourceMap, meta);
		}
	);
};
