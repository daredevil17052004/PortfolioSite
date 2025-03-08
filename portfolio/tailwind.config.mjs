export default {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		fontFamily: {
			sans: "var(--font-geist-sans)",
			mono: "var(--font-geist-mono)",
			arimo: "var(--font-arimo)",
			chakra: "var(--font-chakra)",
		},
		colors: {
			'text': 'var(--text)',
			'background': 'var(--background)',
			'primary': 'var(--primary)',
			'secondary': 'var(--secondary)',
			'accent': 'var(--accent)',
		   },
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  