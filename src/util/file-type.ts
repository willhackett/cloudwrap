import { FileType } from '../types';

export function getFileType(pathname: string): FileType {
	const ext = pathname.split('.').pop();

	switch (ext) {
		case 'pdf':
			return 'pdf';
		case 'jpg':
		case 'jpeg':
		case 'png':
		case 'gif':
		case 'bmp':
		case 'tiff':
		case 'tif':
		case 'webp':
		case 'heif':
		case 'heic':
		case 'raw':
		case 'ico':
		case 'jfif':
		case 'exif':
			return 'image';
		case 'mp4':
		case 'avi':
		case 'mov':
		case 'wmv':
		case 'mkv':
		case 'flv':
		case 'webm':
		case 'mpeg':
		case 'mpg':
		case '3gp':
		case 'vob':
		case 'rm':
		case 'rmvb':
		case 'ts':
			return 'video';
		default:
			return 'file';
	}
}
