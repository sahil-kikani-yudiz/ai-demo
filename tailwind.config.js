const breakpoints = ['', 'lg', 'md', 'sm', 'xxl', 'xl']

const config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./shared/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/*.{js,ts,jsx,tsx,mdx}',
	],
	safelist: [
		'text-yellow-500',
		'border-yellow-500',
		...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].flatMap((i) => breakpoints.map((b) => (b ? `${b}:col-span-${i}` : `col-span-${i}`))),
	],
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1440px',
		},
		extend: {
			animation: {
				close: 'close 0.2s ease-out forwards',
			},
			keyframes: {
				close: {
					'0%': { height: '100%', opacity: '1', 'min-height': '100%' },
					'50%': { height: '50%', opacity: '0.70' },
					'100%': { height: '0', opacity: '0', 'max-height': '0' },
				},
			},
			lineHeight: {
				'extra-loose': '2.5',
				'11': '2.75rem',
			},
			fontSize: {
				xxxs: '0.5rem',
				xxs: '0.625rem',
				xs: '0.75rem',
				'32px': '2rem',
			},
			colors: {
				primary: {
					100: '#E5F2D9',
					300: '#B1D98C',
					400: '#9ACE69',
					DEFAULT: '#7FC142',
					600: '#679D34',
				},
				button: {
					dark: '#121515',
				},
				t: {
					// Text colors
					xLight: '#333333',
					400: '#858585',
					600: '#A1A1A1',
					700: '#AEAEAE',
					origin: '#ffffff',
					note: '#656A6D',
					secondary: '#717171',
					light: {
						100: '#CCCCCC',
						200: '#A0A0A0',
						DEFAULT: '#999999',
						400: '#949494',
					},
					info: '#989898',
				},
				theme: '#121617',
				separator: {
					light: '#2E3B3E',
					DEFAULT: '#232728',
				},
				card: {
					400: '#191F20',
					DEFAULT: '#181C1D',
					600: '#1D1F23',
					700: '#111316',
				},
				widget: '#1E2223',
				content: '#232627',
				c: {
					// border colors
					DEFAULT: '#272D2F',
					dark: '#222A2C',
					light: '#2E3233',
				},
				danger: '#B7192E',
				success: {
					DEFAULT: '#2C6338',
					light: '#00A524',
				},
				warning: '#8B702B',
				secondary: '#E44480',
				confirm: '#408156',
				reject: '#963838',
			},
		},
	},
	plugins: [],
}
export default config
