import axios from "axios";
import { BASE_URL } from "./base_url";

export const http = axios.create({
	baseURL: BASE_URL.BASE_URL,
	timeout: 30000,
	headers: {
		Accept: '*/*',
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	},
});