/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				victor: ['Victor Mono'],
<<<<<<< HEAD
				poppins: ['Poppins']
=======
				poppins: ['Poppins'],
				space: ['Space Grotesk'],
				lob: ['Lobster'],
				hand: ['Amatic SC'],
				dm: ['DM Serif Display'],
				mont: ['Montserrat']
			},
			borderRadius: {
				theWay: '5px'
			},
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)']
>>>>>>> ca89c74 (v3 commit)
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
<<<<<<< HEAD
		themes: ['lofi', 'sunset', 'black', 'light', 'cyberpunk', 'synthwave', 'forest']
=======
		themes: ['cmyk', 'coffee']
>>>>>>> ca89c74 (v3 commit)
	}
};
