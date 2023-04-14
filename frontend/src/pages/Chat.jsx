import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { getAllUsers } from "../api/getAllUsers";
import { Contacts } from "../components/Contacts";
import { ChatContainer } from "../components/ChatContainer";

export const Chat = () => {
	const [contacts, setContacts] = useState([]);
	const [currentUser, setCurrentUser] = useState(undefined);
	const [currentContact, setCurrentContact] = useState(undefined);

	const navigateTo = useNavigate();

	// effects
	useEffect(() => {
		if (!localStorage.getItem("current-user")) {
			navigateTo("/login");
		} else {
			setCurrentUser(JSON.parse(localStorage.getItem("current-user")));
		}
	}, []);

	useEffect(() => {
		async function getData() {
			if (!currentUser) return;
			const response = await getAllUsers({ email: currentUser.email });
			if (response.status) {
				setContacts(response.data);
				return;
			}
			toast.error("Error al obtener contactos");
		}

		getData();
	}, [currentUser]);

	console.log(currentContact);

	// Loading

	return (
		<div className="mx-auto w-full max-w-[1500px] h-full grid grid-cols-3">
			<Contacts
				contacts={contacts}
				currentUser={currentUser}
				setCurrentContact={setCurrentContact}
			/>

			<ChatContainer currentContact={currentContact} currentUser={currentUser} />
		</div>
	);
};
