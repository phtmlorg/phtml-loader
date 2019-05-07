import includeHTML from './example-include.html';
import selfClosing from './example-self_closing.html';
import imageSize from './example-image_size.html';
import printSourceHTML from './example-print_source.html';

document.body.appendChild(
	document.createRange().createContextualFragment([
		`<h1>phtml-loader</h1>`,
		includeHTML,
		imageSize,
		selfClosing,
		printSourceHTML
	].join('\n'))
);
