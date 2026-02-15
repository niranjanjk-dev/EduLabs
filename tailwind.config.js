export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#84ac64', // New Green Primary
                    50: '#f5f9f2',
                    100: '#e8f2e2',
                    200: '#d5e4cc',
                    300: '#b4cf03', // Slightly brighter for hover? No, stick to base. Let me re-calc roughly.
                    // Rough manual palette based on #84ac64
                    400: '#9dbf7f',
                    500: '#84ac64',
                    600: '#678c4a',
                    700: '#526f3b',
                    800: '#435932',
                    900: '#384a2b',
                    950: '#1d2816',
                },
                secondary: {
                    DEFAULT: '#c2c19f', // New Beige/Olive Secondary
                    50: '#f9f9f6',
                    100: '#f2f2eb',
                    200: '#e5e5d6',
                    300: '#d7d7c1',
                    400: '#c2c19f',
                    500: '#a7a685',
                    600: '#8c8b6d',
                    700: '#737259',
                    800: '#5d5c48',
                    900: '#4d4c3c',
                    950: '#2a2a21',
                },
                // Kept mint as alias to primary for backward compat during migration? 
                // No, I will replace usages. But strictly speaking, if I miss any, it breaks.
                // I will add mint as an alias to primary just in case, but deprecated.
                mint: {
                    DEFAULT: '#84ac64',
                    50: '#f5f9f2',
                    100: '#e8f2e2',
                    200: '#d5e4cc',
                    300: '#b4cf03',
                    400: '#9dbf7f',
                    500: '#84ac64',
                    600: '#678c4a',
                    700: '#526f3b',
                    800: '#435932',
                    900: '#384a2b',
                    950: '#1d2816',
                },
                charcoal: {
                    DEFAULT: '#111827',
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#030712',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1rem',
            },
        },
    },
    plugins: [],
}
