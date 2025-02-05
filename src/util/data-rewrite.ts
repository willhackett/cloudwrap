import { FileType, Meta } from '../types';

export class DataTagRewrite implements HTMLRewriterElementContentHandlers {
	constructor(protected meta: Meta) {}
	async element(element: Element) {
		for (const [key, value] of Object.entries(this.meta)) {
			element.setAttribute(`data-${key}`, value);
		}
	}
}
