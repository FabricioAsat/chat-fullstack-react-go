import { useState } from "react";

import send from "../assets/svg/sendMessage.svg";

export const ChatInput = () => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit} className="flex gap-x-3 py-3 px-5 bg-[#292D32]">
			<input
				type="text"
				name="message"
				value={message}
				onChange={(e) => setMessage(e.currentTarget.value)}
				autoComplete="off"
				placeholder="Escribe aquí un mensaje"
				className="w-full outline-none px-3 py-2 bg-[#444] rounded-lg"
			/>
			<button type="submit">
				<img src={send} alt="Send" className="w-8" />
			</button>
		</form>
	);
};
