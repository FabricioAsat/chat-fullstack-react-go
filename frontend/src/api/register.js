import axios from "axios";

// in progress
export const register = async (body) => {
	try {
		const { data } = await axios.post(import.meta.env.VITE_URL_SERVER + "register", body);
		return { status: true, data };
	} catch (err) {
		return { status: false, data: null };
	}
};
