import userImage from "../assets/svg/userDefault.svg";

export const Contacts = ({ contacts, currentUser, setCurrentContact }) => {
	if (contacts.length === 0 || !currentUser)
		return (
			<article className="relative  col-span-1 flex flex-col overflow-y-auto border-r-2 border-[#151515] animate-pulse">
				<div className="bg-black cursor-pointer px-5 flex items-start gap-x-4 py-5 border-b-2 border-[#151515]">
					<img src={userImage} alt="Image" className="w-12" />
					<span className="w-full">
						<h4 className="text-lg font-bold">Cargando...</h4>
						<p className="text-xs italic text-sky-400"></p>
					</span>
				</div>

				<section className="flex flex-col overflow-y-auto h-full bg-black"></section>
			</article>
		);

	//
	return (
		<article className="relative  col-span-1 flex flex-col overflow-y-auto border-r-2 border-[#151515]">
			<div className="bg-black/50 px-5 flex items-start gap-x-4 py-5 border-b-2 border-neutral-800">
				<img src={userImage} alt="Image" className="w-12" />
				<span className="w-full">
					<h4 className="text-lg font-bold">{currentUser.username}</h4>
					<p className="text-xs italic text-sky-400">{currentUser.email}</p>
				</span>
			</div>

			<section className="flex flex-col overflow-y-auto">
				{contacts.map((user) => (
					<div
						key={user._id}
						className="hover:bg-black/25 cursor-pointer px-5 flex items-start gap-x-4 py-4 border-b border-neutral-800"
						onClick={() => setCurrentContact(user)}
					>
						<img src={userImage} alt="Image" className="w-12" />
						<h4 className="text-lg font-bold">{user.username}</h4>
					</div>
				))}
			</section>
		</article>
	);
};
