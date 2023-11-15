/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"cdn.discordapp.com",
			"www.freepnglogos.com",
		],
	},
};

module.exports = nextConfig;
