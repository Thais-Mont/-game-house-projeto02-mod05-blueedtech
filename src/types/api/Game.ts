import { genreGameObj, genreObj } from './Genres';

export interface gameObj {
	id?: string;
	title: string;
	coverImageUrl: string;
	imdbScore: number;
}

export interface gameDescObj {
	id?: string;
	title: string;
	coverImageUrl: string;
	imdbScore: number;
	description: string;
	year: number;
	trailerYouTubeUrl: string;
	gameplayYouTubeUrl: string;
	genres: [];
}

export interface gameDetailObj {
	id?: string;
	title: string;
	coverImageUrl: string;
	imdbScore: number;
	description: string;
	year: number;
	trailerYouTubeUrl: string;
	gameplayYouTubeUrl: string;
	genres: genreObj[];
}
