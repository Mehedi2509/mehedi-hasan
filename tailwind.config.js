/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'transparent': "transparent",
        'black': "#000000",
        'bodyColor': "#191919",
        'textColor': "rgba(255, 255, 255, 0.85)",
        'designColor': "#edff20",
        'titleRoundBg': "linear-gradient(135deg,rgba(120,204,109,.15) 0%,rgba(120,204,109,1%) 100%)",
        'gray-200': "#e5e7eb",
        'gray-700': "#374151",
        'gray-800': "#1f2937",
        'zinc-400': "#a1a1aa",
        'zinc-500': "#71717a",
        'zinc-600': "#52525b",
        'zinc-800': "#27272a",
    },
    fontFamily: {
      bodyFont: ["Poppins", "sans-serif"],
      playfair: ["Playfair Display", 'serif'],
      plus: ["Plus Jakarta Sans", 'sans-serif'],
      titleFont: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      '64px': ['4rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '52px': ['3.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '48px': ['3rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '42px': ['2.625rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '36px': ['2.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '32px': ['2rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '28px': ['1.75rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '27px': ['1.688rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '24px': ['1.5rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '22px': ['1.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '20px': ['1.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '18px': ['1.125rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '16px': ['1rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      '14px': ['0.875rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      'xl': ['1.25rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      'base': ['1rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
      'sm': ['0.875rem', {
        lineHeight: '1.25rem',
        letterSpacing: 'normal'
      }],
      'xs': ['0.75rem', {
        lineHeight: 'normal',
        letterSpacing: 'normal'
      }],
    },
    screens: {
        'xs': "320px",
        'sm': "375px",
        'sml': "500px",
        'md': "667px",
        'mdl': "768px",
        'lg': "960px",
        'lgl': "1024px",
        'xl': "1280px",
    },
    borderRadius: {
      '0': '0',
      '4px': '0.25rem',
      '8px': '0.5rem',
      '10px': '0.625rem',
      '12px': '0.75rem',
      '13px': '0.813rem',
      '14px': '0.875rem',
      '15px': '0.938rem',
      '20px': '1.25rem',
      '25px': '1.563rem',
      '30px': '1.875rem',
      '50px': '3.125rem',
      '100px': '6.25rem',
      'full': '31.25rem',
      'md': '0.375rem',
      'xl': '.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        // sm: '1.875rem',
        // md: '0.938rem',
      },
      screens: {
        maxWidth: '1320px',
        xs: '576px',
        sm: '767px',
        md: '991px',
        lg: '1199px',
      },
      // custom: {
      //   center: true,
      //   padding: {
      //     DEFAULT: '0.75rem',
      //     // sm: '1.875rem',
      //     // md: '0.938rem',
      //   },
      //   screens: {
      //     maxWidth: '1760px',
      //     xs: '576px',
      //     sm: '768px',
      //     md: '991px',
      //     lg: '1023px',
      //     xl: '1240px',
      //   },
      // },
    },
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      boxShadow: {
        greenShadow: "0px 0px 188px -14px rgba(237,255,32,1)",
        testShwdow: "11px 0px 13px -15px rgba(0,0,0,1)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
}

