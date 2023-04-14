import { useState } from "react";
import { toast } from "sonner";

import send from "../assets/svg/sendMessage.svg";
import { addMessage } from "../api/addMessage";

export const ChatInput = ({ idsender, idlistener, setNewMessageSended, newMessageSended }) => {
	const [canTypeAgain, setCanTypeAgain] = useState(true);
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!message) return;

		async function getData() {
			setCanTypeAgain(false);
			setMessage("");
			const data = await addMessage({ idlistener, idsender, message });

			if (!data.status) {
				toast.error("Error al enviar el mensaje");
				return;
			}
			setCanTypeAgain(true);
			setNewMessageSended(!newMessageSended);
		}
		getData();
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-x-3 py-3 px-5 bg-[#212529]">
			<input
				type="text"
				name="message"
				disabled={!canTypeAgain}
				value={canTypeAgain ? message : "Enviando mensaje..."}
				onChange={(e) => setMessage(e.currentTarget.value)}
				autoComplete="off"
				placeholder="Escribe aquí un mensaje"
				className={`w-full outline-none px-3 py-2 bg-black/25 rounded-lg disabled:text-gray-500 placeholder:text-gray-500`}
			/>
			<button type="submit">
				<img src={send} alt="Send" className="w-8" />
			</button>
		</form>
	);
};
