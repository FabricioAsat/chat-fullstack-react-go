import axios from "axios";

// in progress
export const register = async (body) => {
	try {
		const data = await axios.post(import.meta.VITE_URL_SERVER + "register", body);
		return { status: true, user: {} };
	} catch {
		return { status: false, user: null };
	}
};
