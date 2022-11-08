import api from './api';

const deleteService = {
	deleteProfile: (id: string) =>
		api
			.delete(`/profile/${id}`)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	deleteGenre: (id: string) =>
		api
			.delete(`/Genre/${id}`)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	deleteGame: (id: string) =>
		api
			.delete(`/game/${id}`)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	deleteUser: (id: string) =>
		api
			.delete(`/user/${id}`)
			.then((response: any) => response)
			.catch((error: any) => error.response),
};

export { deleteService };
