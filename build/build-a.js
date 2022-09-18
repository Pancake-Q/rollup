const rollup = require('rollup');
async function build() {
	const bundle = await rollup.rollup({
		input: ['./src/index.js'],
	});
	const result = await bundle.generate({
		format: 'es',
	});
	bundle.write({
		dir: 'dist/es',
	});
	console.log('result:', result);
}
build();
