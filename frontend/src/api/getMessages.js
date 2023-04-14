import axios from "axios";

export const getMessages = async (body) => {
	try {
		const { data } = await axios.post(import.meta.env.VITE_URL_SERVER + "getmessages", body);
		return { status: true, data };
	} catch (err) {
		return { status: false, data: null };
	}
};
