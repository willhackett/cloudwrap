export type FileType = 'video' | 'image' | 'pdf' | 'file';

export interface Meta {
	pathname: string;
	type: FileType;
	name: string;
	ext: string;
	size: string;
}
