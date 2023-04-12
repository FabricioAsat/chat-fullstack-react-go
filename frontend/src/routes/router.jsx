import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Error } from "../pages/Error";
import { Chat } from "../pages/Chat";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Chat />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};
