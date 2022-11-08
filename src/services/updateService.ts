import { gameDescObj } from 'types/api/Game';
import { genreObj } from 'types/api/Genres';
import { profilefavoriteObj, profileObj } from 'types/api/Profile';
import { userEditObj, userObj, userPassObj } from 'types/api/User';
import api from './api';

const updateService = {
	updateProfile: (id: string, values: profileObj) =>
		api
			.patch(`/profile/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	updateFavorito: (id: string, values: profilefavoriteObj) =>
		api
			.patch(`/profile/favoriteGame/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	updateGame: (id: string, values: gameDescObj) =>
		api
			.patch(`/game/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	updateUser: (id: string, values: userObj) =>
		api
			.patch(`/user/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	updateUserEdit: (id: string, values: userEditObj) =>
		api
			.patch(`/user/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	updateUserPass: (id: string, values: userPassObj) =>
		api
			.patch(`/user/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	updateGenre: (id: string, values: genreObj) =>
		api
			.patch(`/genre/${id}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
};

export { updateService };
