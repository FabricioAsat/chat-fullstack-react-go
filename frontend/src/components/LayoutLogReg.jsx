import go from "../assets/svg/go.svg";
import tailwind from "../assets/svg/tailwind.svg";
import react from "../assets/svg/react.svg";
import vite from "../assets/svg/vite.svg";

import logo from "../assets/svg/logo.svg";

export const LayoutLogReg = ({ children }) => {
	return (
		<div className={`w-full max-w-7xl mx-auto h-full grid grid-cols-2 bg-neutral-950`}>
			<article className="flex flex-col justify-start gap-y-10 bg-blue-700 p-5 rounded-r-3xl select-none">
				<span className="flex justify-center items-end text-4xl font-bold my-10">
					Ch
					<img src={logo} alt="Easy" className="h-7 pb-px" />
					tting
				</span>

				<section className="flex gap-x-7 max-w-lg mx-auto w-full">
					<picture className="h-20 w-24 rounded-lg flex items-center justify-center bg-black/20">
						<img src={vite} alt="Vitejs" className="h-10" />
					</picture>

					<aside className="w-full">
						<h2 className="text-base font-bold text-white mb-px">Vite.js</h2>
						<p className="text-sm text-neutral-300">
							Empaquetado rápido y moderno, liviano y sencillo.
						</p>
					</aside>
				</section>

				<section className="flex gap-x-7 max-w-lg mx-auto w-full">
					<picture className="h-20 w-24 rounded-lg flex items-center justify-center bg-black/20">
						<img src={tailwind} alt="Easy" className="h-10" />
					</picture>

					<aside className="w-full">
						<h2 className="text-base font-bold text-white mb-px">Tailwind CSS</h2>
						<p className="text-sm text-neutral-300">
							Framework CSS básico y sencillo capaz de generar un diseño básico y bonito.
						</p>
					</aside>
				</section>

				<section className="flex gap-x-7 max-w-lg mx-auto w-full">
					<picture className="h-20 w-24 rounded-lg flex items-center justify-center bg-black/20">
						<img src={react} alt="Easy" className="h-10" />
					</picture>

					<aside className="w-full">
						<h2 className="text-base font-bold text-white mb-px">React.js</h2>
						<p className="text-sm text-neutral-300">
							Librería de maquetado fácil de utilizar para proyectos como este.
						</p>
					</aside>
				</section>

				<section className="flex gap-x-7 max-w-lg mx-auto w-full">
					<picture className="h-20 w-24 rounded-lg flex items-center justify-center bg-black/20">
						<img src={go} alt="Easy" className="h-10" />
					</picture>

					<aside className="w-full">
						<h2 className="text-base font-bold text-white mb-px">Go</h2>
						<p className="text-sm text-neutral-300">
							Lenguaje usado en el backend, rápido y seguro.
						</p>
					</aside>
				</section>
			</article>
			<article className="bg-neutral-950 py-10 px-5">{children}</article>
		</div>
	);
};
