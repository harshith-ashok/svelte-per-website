/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				victor: ['Victor Mono'],
				poppins: ['Poppins'],
				space: ['Space Grotesk'],
				lob: ['Lobster']
			},
			backgroundImage: {
				bgHero:
					"url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['lofi', 'sunset', 'black', 'light', 'cyberpunk', 'synthwave', 'forest']
	}
};
