module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		boxShadow: {
			black: "2px 3px 3px 1px rgba(0, 0, 0)",
			none: "0 0 0 0 rgba(255, 255, 255)",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
