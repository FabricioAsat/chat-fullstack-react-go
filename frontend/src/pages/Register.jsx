import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LayoutLogReg } from "../components/LayoutLogReg";

export const Register = () => {
	const [inputValues, setInputValues] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function handleChange(e) {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	}

	return (
		<LayoutLogReg>
			<span className="flex flex-col items-center justify-between">
				<h2 className="text-4xl font-bold">Registrarse</h2>
				<i className="text-xl text-sky-500 font-bold">Es fácil y gratis</i>
			</span>
			<form className="flex flex-col gap-y-6 py-10 max-w-md w-full mx-auto">
				<span className="flex flex-col">
					<label htmlFor="username" className="font-bold mb-3">
						Nombre de usuario <b className="text-red-500">*</b>
					</label>
					<input
						type="text"
						required
						value={inputValues.username}
						autoComplete="off"
						name="username"
						onChange={handleChange}
						placeholder="Introduce tu username"
						className="bg-white/10 py-2 px-3 rounded-md outline-none"
					/>
				</span>

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

				<span className="flex flex-col">
					<label htmlFor="confirmPassword" className="font-bold mb-3">
						Confirma tu contraseña <b className="text-red-500">*</b>
					</label>
					<input
						type="password"
						required
						value={inputValues.confirmPassword}
						autoComplete="off"
						name="confirmPassword"
						onChange={handleChange}
						placeholder="Introduce de nuevo tu contraseña"
						className="bg-white/10 py-2 px-3 rounded-md outline-none"
					/>
				</span>

				<span className="flex flex-col items-center justify-center">
					<input
						type="submit"
						value="Crear cuenta"
						className=" bg-sky-500 text-neutral-950 w-64 py-2 my-5 font-bold rounded-lg text-lg cursor-pointer"
					/>
					<nav className="py-2">
						<p className="text-base text-center font-semibold">
							Ya tienes una cuenta? {" | "}
							<Link to={"/login"} className="text-sky-500 font-bold">
								Iniciar sesión
							</Link>
						</p>
					</nav>
				</span>
			</form>
		</LayoutLogReg>
	);
};
