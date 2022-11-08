import { profileObj } from '../types/api/Profile';
import { User } from '../types/api/User';
import api from './api';

// import { gameDescObj } from 'types/api/Game';


const createService = {
	createUser: (values: User) =>
		api
			.post('/user/new-user', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
	// createGame: (values: gameDescObj) =>
	// 	api
	// 		.post('/game', values)
	// 		.then((response: any) => response)
	// 		.catch((error: any) => error.response),
	createProfile: (values: profileObj) =>
		api
			.post('/profile/new-profile', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
};

export { createService };
