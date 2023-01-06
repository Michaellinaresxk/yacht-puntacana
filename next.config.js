/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.export = {
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "en",
	},
};

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
