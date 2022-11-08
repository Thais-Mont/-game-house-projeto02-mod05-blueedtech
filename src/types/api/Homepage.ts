export interface homepageObj {
	genre: string;
	title: [
		{
			id?: string;
			title: string;
			coverImageUrl: string;
			imdbScore: number;
		}
	];
}
