/** @type {import('tailwindcss').Config} */
export default {
content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
darkMode: 'media',
theme: {
extend: {
colors: {
bg: { DEFAULT: '#0D1613', soft: '#12211D' },
surface: { DEFAULT: '#12211D', 2: '#182924' },
ink: { DEFAULT: '#E9F2EF', soft: '#A3B7B1', faint: '#6E8580' },
line: '#25372F',
accent: { DEFAULT: '#57D6C4', ink: '#08211C' },
amber: '#E3A05C',
},
fontFamily: {
display: ['Archivo', 'ui-sans-serif', 'sans-serif'],
sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
},
maxWidth: {
wrap: '72rem',
},
keyframes: {
rise: {
'0%': { opacity: '0', transform: 'translateY(14px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%,100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-8px)' },
},
},
animation: {
rise: 'rise .7s cubic-bezier(.2,.7,.2,1) both',
float: 'float 6s ease-in-out infinite',
},
backgroundImage: {
'grid-pattern':
'linear-gradient(to right, rgba(87,214,196,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(87,214,196,0.07) 1px, transparent 1px)',
},
},
},
plugins: [],
};
