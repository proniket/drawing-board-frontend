import { io } from "socket.io-client";
console.log(process.env.LOCAL_URL);
console.log(process.env.SERVER_URL);
const URL =
	process.env.NODE_ENV === 'production'
		? process.env.SERVER_URL
		: process.env.LOCAL_URL;
export const socket = io(URL);

