import userImage from "../assets/svg/userDefault.svg";
import welcome from "../assets/hello.png";

import { ChatInput } from "./ChatInput";
import { Messages } from "./Messages";
import { useEffect, useState } from "react";
import { getMessages } from "../api/getMessages";
import { toast } from "sonner";

export const ChatContainer = ({ currentContact, currentUser }) => {
	const [newMessageSended, setNewMessageSended] = useState(false);
	const [allMessages, setAllMessages] = useState();

	useEffect(() => {
		if (!currentContact || !currentUser) return;

		async function getData() {
			const data = await getMessages({ idsender: currentUser._id, idlistener: currentContact._id });

			if (!data.status) {
				toast.error("Error con el servidor");
				return;
			}

			setAllMessages(data.data);
		}

		getData();
	}, [currentContact, newMessageSended]);

	if (!currentContact)
		return (
			<article className="col-span-2 flex flex-col select-none">
				<div className="bg-black/50 px-5 flex flex-col items-center justify-center gap-x-4 py-5 border-b-4 border-sky-400 h-full">
					<img src={welcome} alt="Bienvenida" className="h-72 object-cover" />

					<h3 className="text-4xl text-sky-500 font-bold">Chatting web</h3>
					<p className="max-w-lg text-center text-neutral-400 italic">
						Una forma segura, simple y rápida de hablar con tus amigüitos
					</p>
				</div>
			</article>
		);

	return (
		<article className="col-span-2 flex flex-col overflow-y-auto">
			<div className="bg-black/50 px-5 flex items-start gap-x-4 py-5 border-b-2 border-neutral-800">
				<img src={userImage} alt="Image" className="w-12" />
				<span className="w-full">
					<h4 className="text-lg font-bold">{currentContact.username}</h4>
					<p className="text-xs italic text-sky-400">{currentContact._id}</p>
				</span>
			</div>

			<section className="bg-[url(./assets/pattern.webp)] flex flex-col h-full overflow-y-auto">
				<Messages allMessages={allMessages} myId={currentUser._id} />
				<ChatInput
					idsender={currentUser._id}
					idlistener={currentContact._id}
					setNewMessageSended={setNewMessageSended}
					newMessageSended={newMessageSended}
				/>
			</section>
		</article>
	);
};
//
