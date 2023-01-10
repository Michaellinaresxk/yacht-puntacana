/** @type {import('next').NextConfig} */
const i18n = require('./next-18next.config');
const nextConfig = {
	reactStrictMode: true,
	i18n,
};

module.exports = nextConfig;

module.exports = {
	images: {
		formats: ["image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "3000",
				pathname: "/account123/**",
			},
		],
	},
};
