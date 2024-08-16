/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'fade-in-up': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
              },
              animation: {
                'fade-in-up': 'fade-in-up 1s ease-out forwards',
              },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                zilla: ["Zilla Slab", "serif"],
            },
            colors: {
                darkbrown: "#403838",
                lightgrey: "#E2E1E1",
                lightbeige: "#F7E0C3",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
