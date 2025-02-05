import { DataTagRewrite } from './util/data-rewrite';
import { Meta } from './types';
import { getFileType } from './util/file-type';
import { UnusedTagRewrite } from './util/unused-rewrite';
import { prettyBytes } from './util/pretty-bytes';

const BUCKET_PREFIX = '/r2/';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		// Serve the bucket
		if (url.pathname.startsWith(BUCKET_PREFIX)) {
			const fileName = url.pathname.slice(BUCKET_PREFIX.length);

			const file = await env.BUCKET.get(fileName);

			if (!file) {
				return new Response('Not Found', { status: 404 });
			}

			const headers = new Headers();
			file.writeHttpMetadata(headers);
			headers.set('etag', file.httpEtag);

			return new Response(file.body, {
				headers,
			});
		}

		const fileName = url.pathname.slice(1);

		const metadata = await env.BUCKET.head(fileName);

		if (!metadata) {
			return new Response('Not Found', { status: 404 });
		}

		const templateHtmlPreviewUrl = new URL(`${url.origin}/preview.html`);
		const templateHtml = await env.ASSETS.fetch(templateHtmlPreviewUrl);

		const meta: Meta = {
			pathname: `${BUCKET_PREFIX}${fileName}`,
			type: getFileType(url.pathname),
			name: fileName,
			ext: fileName.split('.').pop()!,
			size: prettyBytes(metadata.size),
		};

		return new HTMLRewriter()
			.on('#file', new UnusedTagRewrite('file', meta))
			.on('#image', new UnusedTagRewrite('image', meta))
			.on('#pdf', new UnusedTagRewrite('pdf', meta))
			.on('#video', new UnusedTagRewrite('video', meta))
			.on('#data', new DataTagRewrite(meta))
			.transform(templateHtml);
	},
} satisfies ExportedHandler<Env>;
