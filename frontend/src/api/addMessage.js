import axios from "axios";

export const addMessage = async (body) => {
	try {
		console.log(body);
		const { data } = await axios.post(import.meta.env.VITE_URL_SERVER + "addmessage", body);
		return { status: true, data };
	} catch (err) {
		return { status: false, data: null };
	}
};
