/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		LOCAL_URL: process.env.LOCAL_URL,
		SERVER_URL: process.env.SERVER_URL,
	},
};

module.exports = nextConfig
