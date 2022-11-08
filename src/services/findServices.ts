import api from './api';

const findAllService = {
	allGames: () =>
		api
			.get('/game')
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log(error)),
	allProfiles: () =>
		api
			.get('/profile')
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log(error)),
	allGenres: () =>
		api
			.get('/genre')
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log(error)),
	allUsers: () =>
		api
			.get('/user')
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log(error)),
};

const findByIdService = {
	findProfileById: (id: string) =>
		api
			.get(`/profile/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	findUserById: (id: string | undefined) =>
		api
			.get(`/user/${id}`)
			.then((response: any) => {
				return response;
			})
			.catch((error: any) => console.log(error)),
	findHomeProfile: (id: string) =>
		api
			.get(`/homepage/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	findGenreById: (id: string) =>
		api
			.get(`/genre/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
	findGameById: (id: string) =>
		api
			.get(`/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),
};

export { findAllService, findByIdService };
