import lock from "../assets/svg/lock.svg";
import easy from "../assets/svg/easy.svg";
import secure from "../assets/svg/secure.svg";
import logo from "../assets/svg/logo.svg";

export const LayoutLogReg = ({ children }) => {
	return (
		<div className={`w-full max-w-7xl mx-auto h-full grid grid-cols-2`}>
			<article className="flex flex-col justify-start gap-y-16 bg-blue-800 p-5">
				<span className="flex justify-center items-end text-4xl font-bold">
					Ch
					<img src={logo} alt="Easy" className="h-7 pb-px" />
					tting
				</span>

				<section className="flex gap-x-5 max-w-lg mx-auto w-full">
					<picture className="h-20 w-24 rounded-lg flex items-center justify-center bg-white/10">
						<img src={easy} alt="Easy" className="h-10" />
					</picture>

					<aside className="w-full">
						<h2 className="text-base font-bold text-white">Fácil de usar</h2>
						<p className="text-sm text-neutral-300">
							La web posee un diseño amigable con el usuario. Lo que le permite utilizarla
							facilmente sin problemas.
						</p>
					</aside>
				</section>

				<section className="flex gap-x-5 max-w-lg mx-auto w-full">
					<picture className="h-20 w-24 rounded-lg flex items-center justify-center bg-white/10">
						<img src={lock} alt="Easy" className="h-10" />
					</picture>

					<aside className="w-full">
						<h2 className="text-base font-bold text-white">Cifrado extremo</h2>
						<p className="text-sm text-neutral-300">
							Tus mensajes y contraseñas se cifran de extremo a extremo haciendo imposible ver tus
							datos.
						</p>
					</aside>
				</section>

				<section className="flex gap-x-5 max-w-lg mx-auto w-full">
					<picture className="h-20 w-24 rounded-lg flex items-center justify-center bg-white/10">
						<img src={secure} alt="Easy" className="h-10" />
					</picture>

					<aside className="w-full">
						<h2 className="text-base font-bold text-white">Alta Seguridad</h2>
						<p className="text-sm text-neutral-300">
							Protección de última generación ante hackeos externos.
						</p>
					</aside>
				</section>
			</article>
			<article className="bg-neutral-950">{children}</article>
		</div>
	);
};
