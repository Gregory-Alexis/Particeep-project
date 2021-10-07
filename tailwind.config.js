module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		boxShadow: {
			black: "0px 0px 3px 5px rgba(0, 0, 0)",
			none: "0 0 0 0 rgba(255, 255, 255)",
			grey: "0px 0px 2px 4px rgba(87, 87, 87)",
		},

		extend: {},
	},
	variants: {
		extend: {
			transform: ["focus", "hover"],
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
}
