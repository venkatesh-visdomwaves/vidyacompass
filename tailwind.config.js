/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f1ff',
                    100: '#b3d7ff',
                    200: '#80bdff',
                    300: '#4da3ff',
                    400: '#1a89ff',
                    500: '#0070f3',
                    600: '#005cc0',
                    700: '#00478d',
                    800: '#00335a',
                    900: '#001f27',
                },
                accent: {
                    50: '#e6fff9',
                    100: '#b3ffed',
                    200: '#80ffe1',
                    300: '#4dffd5',
                    400: '#1affc9',
                    500: '#00e6b3',
                    600: '#00b38a',
                    700: '#008061',
                    800: '#004d38',
                    900: '#001a0f',
                }
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
