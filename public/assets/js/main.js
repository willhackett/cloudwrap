const data = document.getElementById('data');
const downloadButton = document.getElementById('download');

function setAttr(selector, attribute, value) {
	const element = document.getElementById(selector);

	if (!element) {
		return;
	}

	if (attribute === 'text') {
		element.innerText = value;
		return;
	}

	element.setAttribute(attribute, value);
}

const meta = {
	pathname: data.getAttribute('data-pathname'),
	type: data.getAttribute('data-type'),
	name: data.getAttribute('data-name'),
	size: data.getAttribute('data-size'),
	ext: data.getAttribute('data-ext'),
};

setAttr('name', 'text', meta.name);
setAttr('size', 'text', meta.size);
setAttr('image-img', 'src', meta.pathname);
setAttr('download', 'href', meta.pathname);
setAttr('download', 'download', meta.name);
setAttr('pdf-embed', 'src', meta.pathname);
setAttr('video-source', 'src', meta.pathname);

downloadButton.addEventListener('click', () => {
	window.location = meta.pathname;
});
