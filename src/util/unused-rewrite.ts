import { FileType, Meta } from '../types';

export class UnusedTagRewrite implements HTMLRewriterElementContentHandlers {
	constructor(protected type: FileType, protected meta: Meta) {}
	async element(element: Element) {
		if (this.meta.type !== this.type) {
			element.remove();
		}
	}
}
