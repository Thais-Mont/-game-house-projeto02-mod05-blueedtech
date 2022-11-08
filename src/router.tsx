import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./types/routes";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Usuarios from "./pages/Profile/Profile";
import DetalhesGame from "./pages/DetalhesGame/DetalhesGame";
import Registro from "./pages/Registro/Registro";
import Profile from "./pages/Profile/Profile";



const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.REGISTRO} element={<Registro />} />
			<Route path={RoutePath.LOGIN} element={<Login />} />
			<Route path={RoutePath.PROFILE} element={<Profile />} />
			<Route path={RoutePath.HOME} element={<Home />} />
			<Route path={RoutePath.DETALHES} element={<DetalhesGame />} />
		</Routes>
	);
};

export default Router;