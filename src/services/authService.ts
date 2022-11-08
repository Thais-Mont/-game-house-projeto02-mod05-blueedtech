import api from './api';
import {userObj, userLoginObj} from '../types/api/User';

const loginService = {
	login: (values: userLoginObj) =>
		api
			.post('/auth', values)
			.then((response: any) => response)
			.catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
};

const registerService = {
	registerValues: (values: userObj) =>
		api
			.post('/user', values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
};

export { loginService, registerService };
