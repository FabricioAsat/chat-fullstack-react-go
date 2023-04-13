import axios from "axios";

export const login = async (body) => {
	try {
		const { data } = await axios.post(import.meta.env.VITE_URL_SERVER + "login", body);
		return { status: true, data };
	} catch (err) {
		return { status: false, data: null };
	}
};
