/** @type {import('tailwindcss').Config} */
import animations from 'tailwindcss-animated'


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'system-ui', 'sans-serif'],
				parisienne: ['Parisienne', 'cursive']
			},
			colors: {
				'background-body': '#F6F4EC',
				'primary': '#FFA5A5',
				'secundary': '#FFD6C0',
				'text-dark': '#262730'
			},
			backgroundImage: {
				'footer-back': 'url(./flowers.webp)'
			}
		},
	},
	plugins: [
		animations
	],
}
