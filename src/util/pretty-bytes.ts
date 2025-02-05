export function prettyBytes(bytes: number) {
	const units = ['B', 'KB', 'MB', 'GB', 'TB'];

	let unitIndex = 0;
	let size = bytes;

	while (size >= 1024 && unitIndex < units.length) {
		size /= 1024;
		unitIndex++;
	}

	return `${size.toFixed(2)} ${units[unitIndex]}`;
}
