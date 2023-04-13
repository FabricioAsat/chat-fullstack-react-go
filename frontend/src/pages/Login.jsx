import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { LayoutLogReg } from "../components/LayoutLogReg";
import { login } from "../api/login";
import { emailValidator } from "../helpers/emailValidator";

export const Login = () => {
	const [isWaittingReq, setIsWaittingReq] = useState(false);
	const [inputValues, setInputValues] = useState({
		email: "",
		password: "",
	});
	const navigateTo = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validaciones
		if (inputValues.email.length >= 50 || !emailValidator(inputValues.email)) {
			toast.error("Email no válido");
		}

		if (inputValues.password.length < 4) {
			toast.error("Ingresa una contraseña más larga");
		}
		//

		//
		setIsWaittingReq(true);
		const loginResponse = await login(inputValues);

		console.log(loginResponse);

		if (loginResponse.status) {
			setIsWaittingReq(false);
			toast.success("Inicio de sesión exitoso");
			const stringifyUser = JSON.stringify(loginResponse.data);
			localStorage.setItem("current-user", stringifyUser);
			navigateTo("/");
		} else {
			setIsWaittingReq(false);
			toast.error("Usuario inválido, revisa tus datos");
		}
	};

	function handleChange(e) {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	}

	// Effects
	useEffect(() => {
		if (localStorage.getItem("current-user")) navigateTo("/");
	}, []);

	return (
		<LayoutLogReg>
			<span className="flex flex-col items-start max-w-md mx-auto">
				<h2 className="text-4xl font-bold">Iniciar sesión</h2>
				<i className="text-xl text-sky-500 font-bold">Tus amigos te esperan!!!</i>
				<hr className="border-b-2 border-neutral-800 w-24 my-2" />
			</span>
			<form onSubmit={handleSubmit} className="flex flex-col gap-y-6 pt-10 max-w-md w-full mx-auto">
				<span className="flex flex-col">
					<label htmlFor="email" className="font-bold mb-3">
						Correo electrónico <b className="text-red-500">*</b>
					</label>
					<input
						type="email"
						required
						value={inputValues.email}
						autoComplete="off"
						name="email"
						onChange={handleChange}
						placeholder="Introduce tu email"
						className="bg-white/10 py-2 px-3 rounded-md outline-none"
					/>
				</span>

				<span className="flex flex-col">
					<label htmlFor="password" className="font-bold mb-3">
						Contraseña <b className="text-red-500">*</b>
					</label>
					<input
						type="password"
						required
						value={inputValues.password}
						autoComplete="off"
						name="password"
						onChange={handleChange}
						placeholder="Introduce tu contraseña"
						className="bg-white/10 py-2 px-3 rounded-md outline-none"
					/>
				</span>

				<span className="flex flex-col items-center justify-center">
					<input
						disabled={isWaittingReq}
						type="submit"
						value="Iniciar sesión"
						className=" bg-sky-500 text-neutral-950 w-64 py-2 my-5 font-bold rounded-lg text-lg cursor-pointer hover:brightness-90 disabled:brightness-50"
					/>
					<nav className="py-2">
						<p className="text-base text-center font-semibold">
							No tienes una cuenta? {" | "}
							<Link to={"/register"} className="text-sky-500 font-bold hover:brightness-75">
								Crear cuenta
							</Link>
						</p>
					</nav>
				</span>
			</form>
		</LayoutLogReg>
	);
};
