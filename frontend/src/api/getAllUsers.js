import axios from "axios";

export const getAllUsers = async () => {
	try {
		const { data } = await axios.get(import.meta.env.VITE_URL_SERVER + "users");
		return { status: true, data };
	} catch (err) {
		return { status: false, data: null };
	}
};
