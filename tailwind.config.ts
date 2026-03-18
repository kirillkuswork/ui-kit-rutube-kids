import type { Config } from 'tailwindcss';

import {
    configSafelist as safelist,
    configTheme as theme,
} from './src/utils/tokens/generators';

const tailwindConfig = {
    safelist,
    content: [
        './src/**/*.{js,jsx,ts,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            // 390 — от 0 до 743px => isMobile
            // 744 — от 744px до 1023px => isSmallTablet
            // 1024 — от 1024px до 1279px => isTablet
            // 1440 — от 1280px до ∞ => isDesktop
            sm: '0px',
            md: '744px',
            lg: '1024px',
            xl: '1440px',
        },
        opacity: {
            2.5: '0.025',
        },
        colors: {},
        extend: {
            ...theme,
            maxWidth: {
                'main-layout': '1080px',
            },
            zIndex: {
                overlay: '60',
                popup: '70',
                'modal-overlay': '75',
                modal: '80',
                notify: '100',
            },
            rotate: {
                50: '50deg',
            },
            backgroundImage: {
                'radio-mark': 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEwIiBmaWxsPSIjRjIwMDRDIi8+CiAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI0IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K")',
            },
            keyframes: {
                ripples: {
                    '0%': { transform: 'scale(1)', opacity: '0.2' },
                    '100%': { transform: 'scale(10)', opacity: '0' },
                },
                'absolute-spin': {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
                'slide-in': {
                    '0%': {
                        transform: 'translateY(-100%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                'slide-out': {
                    '100%': {
                        transform: 'translateY(-100%)',
                        opacity: '0',
                    },
                    0: {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
            },
            animation: {
                ripples: 'ripples 300ms ease-out forwards',
                'absolute-spin': 'absolute-spin 1s linear infinite',
                'fade-in': 'fade-in 300ms ease-out forwards',
                'slide-in': 'slide-in 0.2s linear both',
                'slide-out': 'slide-out 0.2s linear both',
            },
            backgroundColor: {
                transparent: 'transparent',
            },
            placeholderColor: {
                transparent: 'transparent',
            },
            boxShadow: {
                tooltip: '0px 10px 20px 0px rgba(0, 0, 0, 0.10)',
            },

        },
    },
    variants: {
        extend: {
            backgroundColor: ['transparent', 'dark'],
            textColor: ['dark'],
        },
    },
} satisfies Config;

export default tailwindConfig;

export { tailwindConfig };
