import axios from "axios";

export const getAllUsers = async (body) => {
	try {
		const { data } = await axios.post(import.meta.env.VITE_URL_SERVER + "users", body);
		return { status: true, data };
	} catch (err) {
		return { status: false, data: null };
	}
};
